import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const districts = [
  { name: "Dhaka", subdistricts: ["Mirpur", "Uttara", "Gulshan"] },
  { name: "Chittagong", subdistricts: ["Halishahar", "Patenga", "Agrabad"] },
  { name: "Rajshahi", subdistricts: ["Boalia", "Motihar", "Shah Makhdum"] },
  // Add more districts and subdistricts as needed
]

interface DistrictModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (location: string) => void
}

export function DistrictModal({ isOpen, onClose, onSelect }: DistrictModalProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district)
  }

  const handleSubdistrictClick = (subdistrict: string) => {
    onSelect(`${selectedDistrict}, ${subdistrict}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedDistrict ? `Select Subdistrict in ${selectedDistrict}` : "Select District"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2">
          {selectedDistrict
            ? districts
                .find((d) => d.name === selectedDistrict)
                ?.subdistricts.map((subdistrict) => (
                  <Button key={subdistrict} onClick={() => handleSubdistrictClick(subdistrict)} variant="outline">
                    {subdistrict}
                  </Button>
                ))
            : districts.map((district) => (
                <Button key={district.name} onClick={() => handleDistrictClick(district.name)} variant="outline">
                  {district.name}
                </Button>
              ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

