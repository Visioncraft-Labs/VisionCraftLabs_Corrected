import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allPortfolioItems, type PortfolioItem } from "@/data/portfolio";
import BeforeAfterImage from "@/components/before-after-image";

const AdminImages = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [editedItem, setEditedItem] = useState<PortfolioItem | null>(null);

  const handleEditItem = (item: PortfolioItem) => {
    setSelectedItem(item);
    setEditedItem({ ...item });
  };

  const handleUpdateItem = () => {
    if (!editedItem) return;
    
    // In a real implementation, this would update the portfolio data
    console.log("Updated item:", editedItem);
    alert("Image updated! Note: This is a demo. To actually update images, edit client/src/data/portfolio.ts");
    setSelectedItem(null);
    setEditedItem(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-inter font-bold mb-4">Portfolio Image Manager</h1>
          <p className="text-muted">
            Manage your portfolio images. To actually update images, edit the URLs in <code>client/src/data/portfolio.ts</code>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Current Portfolio Images</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {allPortfolioItems.map((item) => (
                <Card key={item.id} className="card-luxury">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted capitalize">{item.category}</p>
                      </div>
                      <Button
                        onClick={() => handleEditItem(item)}
                        className="btn-secondary"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Edit Form */}
          <div className="space-y-4">
            {selectedItem && editedItem ? (
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Edit: {selectedItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Current Images Preview */}
                  <div className="mb-6">
                    <Label className="text-sm font-medium mb-2 block">Current Images</Label>
                    <BeforeAfterImage
                      beforeImage={selectedItem.beforeImage}
                      afterImage={selectedItem.afterImage}
                      beforeAlt={selectedItem.beforeAlt}
                      afterAlt={selectedItem.afterAlt}
                      className="rounded-lg h-32"
                    />
                  </div>

                  {/* Form Fields */}
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={editedItem.title}
                      onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={editedItem.category}
                      onValueChange={(value: "studio" | "lifestyle" | "commercial") =>
                        setEditedItem({ ...editedItem, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="beforeImage">Before Image URL</Label>
                    <Input
                      id="beforeImage"
                      value={editedItem.beforeImage}
                      onChange={(e) => setEditedItem({ ...editedItem, beforeImage: e.target.value })}
                      placeholder="https://your-image-url.com/before.jpg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="afterImage">After Image URL</Label>
                    <Input
                      id="afterImage"
                      value={editedItem.afterImage}
                      onChange={(e) => setEditedItem({ ...editedItem, afterImage: e.target.value })}
                      placeholder="https://your-image-url.com/after.jpg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={editedItem.description}
                      onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="client">Client (Optional)</Label>
                    <Input
                      id="client"
                      value={editedItem.client || ""}
                      onChange={(e) => setEditedItem({ ...editedItem, client: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleUpdateItem} className="btn-luxury">
                      Update Image
                    </Button>
                    <Button 
                      onClick={() => { setSelectedItem(null); setEditedItem(null); }}
                      className="btn-secondary"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="card-luxury">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold mb-2">Select an Image to Edit</h3>
                  <p className="text-muted">
                    Choose an image from the list to update its details and URLs.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Instructions */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-lg">How to Update Images</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">1. Upload Your Images</h4>
                  <p className="text-muted">Upload to Google Drive, Imgur, or any image hosting service</p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Get Public URLs</h4>
                  <p className="text-muted">Make sure the image links are public and direct links</p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Update portfolio.ts</h4>
                  <p className="text-muted">Edit <code>client/src/data/portfolio.ts</code> with your new URLs</p>
                </div>
                <div>
                  <h4 className="font-semibold">4. Deploy Changes</h4>
                  <p className="text-muted">Changes appear live automatically on Netlify</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminImages;