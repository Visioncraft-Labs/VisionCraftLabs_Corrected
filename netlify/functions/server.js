const express = require('express');
const serverless = require('serverless-http');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// In-memory storage for Netlify (since we can't use persistent file system)
let contactSubmissions = [];
let imageUploads = [];
let currentContactId = 1;
let currentImageUploadId = 1;

// Configure multer for file uploads (using memory storage for Netlify)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.'));
    }
  }
});

// Email helper function
async function sendContactEmail(params) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid API key not configured - email not sent');
    return false;
  }

  try {
    const msg = {
      to: 'visioncraftlabs@gmail.com',
      from: 'visioncraftlabs@gmail.com',
      subject: `New Contact Form Submission from ${params.name}`,
      text: `
Contact Form Submission Details:

Name: ${params.name}
Email: ${params.email}
Phone: ${params.phone || 'Not provided'}
Message: ${params.message}

Submitted at: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${params.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
            <p><strong>Phone:</strong> ${params.phone || 'Not provided'}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${params.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 10px; background: #e5e7eb; border-radius: 4px; font-size: 0.9em; color: #6b7280;">
            <p>Submitted at: ${new Date().toLocaleString()}</p>
            <p>From: VisionCraft Labs Contact Form</p>
          </div>
        </div>
      `
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

async function sendImageUploadNotification(params) {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid API key not configured - email not sent');
    return false;
  }

  try {
    const msg = {
      to: 'visioncraftlabs@gmail.com',
      from: 'visioncraftlabs@gmail.com',
      subject: `New Image Upload from ${params.clientName || 'Anonymous'}`,
      text: `
New Image Upload Notification:

Client Name: ${params.clientName || 'Not provided'}
Client Email: ${params.clientEmail || 'Not provided'}
Client Phone: ${params.clientPhone || 'Not provided'}
File Name: ${params.fileName}
Original Name: ${params.originalName}

Uploaded at: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Image Upload</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${params.clientName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${params.clientEmail ? `<a href="mailto:${params.clientEmail}">${params.clientEmail}</a>` : 'Not provided'}</p>
            <p><strong>Phone:</strong> ${params.clientPhone || 'Not provided'}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Upload Details</h3>
            <p><strong>File Name:</strong> ${params.fileName}</p>
            <p><strong>Original Name:</strong> ${params.originalName}</p>
            <p><strong>File Size:</strong> ${(params.fileSize / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          
          <div style="margin-top: 20px; padding: 10px; background: #e5e7eb; border-radius: 4px; font-size: 0.9em; color: #6b7280;">
            <p>Uploaded at: ${new Date().toLocaleString()}</p>
            <p>From: VisionCraft Labs Image Upload System</p>
          </div>
        </div>
      `
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required"
      });
    }

    const submission = {
      id: currentContactId++,
      name,
      email,
      phone: phone || null,
      message,
      createdAt: new Date().toISOString()
    };

    contactSubmissions.push(submission);

    // Send email notification
    const emailSent = await sendContactEmail({
      name,
      email,
      phone,
      message
    });

    res.json({
      success: true,
      message: "Contact form submitted successfully",
      emailSent
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form"
    });
  }
});

app.get('/api/contact-submissions', async (req, res) => {
  try {
    res.json(contactSubmissions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submissions"
    });
  }
});

app.post('/api/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided"
      });
    }

    const { clientName, clientEmail, clientPhone } = req.body;

    // For Netlify, we'll store file info but not the actual file
    // In production, you'd want to upload to a service like Cloudinary or AWS S3
    const uploadRecord = {
      id: currentImageUploadId++,
      fileName: `upload_${Date.now()}_${req.file.originalname}`,
      originalName: req.file.originalname,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      uploadPath: `/tmp/${Date.now()}_${req.file.originalname}`, // Placeholder path
      clientName: clientName || null,
      clientEmail: clientEmail || null,
      clientPhone: clientPhone || null,
      status: "uploaded",
      createdAt: new Date().toISOString()
    };

    imageUploads.push(uploadRecord);

    // Send email notification
    const emailSent = await sendImageUploadNotification({
      clientName: clientName || null,
      clientEmail: clientEmail || null,
      clientPhone: clientPhone || null,
      fileName: uploadRecord.fileName,
      originalName: uploadRecord.originalName,
      fileSize: uploadRecord.fileSize
    });

    res.json({
      success: true,
      upload: {
        id: uploadRecord.id,
        originalName: uploadRecord.originalName,
        status: uploadRecord.status,
        uploadedAt: uploadRecord.createdAt
      },
      emailSent
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: error.message || "Upload failed"
    });
  }
});

app.get('/api/uploads', async (req, res) => {
  try {
    const uploads = imageUploads
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map(upload => ({
        id: upload.id,
        fileName: upload.fileName,
        originalName: upload.originalName,
        fileSize: upload.fileSize,
        mimeType: upload.mimeType,
        clientName: upload.clientName,
        clientEmail: upload.clientEmail,
        clientPhone: upload.clientPhone,
        status: upload.status,
        createdAt: upload.createdAt
      }));

    res.json(uploads);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch uploads"
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Export the serverless function
module.exports.handler = serverless(app);