"use client";

import { Plus, X, Star, Map, List, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, type MouseEvent } from "react";
import { CascadingMenu } from "./CascadingMenu";
import { PortMenu } from "./PortMenu";
import { MapModal } from "./MapModal";
import { AddressBookModal } from "./AddressBookModal";
import { useTranslations } from "next-intl";

export function CreateTripForm() {
  const t = useTranslations("dashboard.createTrip");
  const [isAddressBookOpen, setIsAddressBookOpen] = useState(false);

  const [locations, setLocations] = useState([
    { id: 1, label: t("locationDetails.load.label"), color: t("locationDetails.load.color") },
  ]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isPortMenuOpen, setIsPortMenuOpen] = useState(false);
  const [activeLocationIndex, setActiveLocationIndex] = useState<number | null>(
    null
  );

  const addLocation = () => {
    setLocations([
      ...locations,
      {
        id: locations.length + 1,
        label: t("locationDetails.unload.label"),
        color: t("locationDetails.unload.color"),
      },
    ]);
  };

  const removeLocation = (index: number) => {
    setLocations(locations.filter((_, i) => i !== index));
    if (focusedIndex === index) {
      setFocusedIndex(null);
    }
  };

  const openDistrictMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setActiveLocationIndex(index);
    setIsMenuOpen(true);
    setFocusedIndex(index);
  };

  const openPortMenu = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setActiveLocationIndex(index);
    setIsPortMenuOpen(true);
    setFocusedIndex(index);
  };

  const openMap = (index: number) => {
    setActiveLocationIndex(index);
    setIsMapOpen(true);
    setFocusedIndex(index);
  };

  const handleLocationSelect = (location: string) => {
    if (activeLocationIndex !== null) {
      const updatedLocations = [...locations];
      updatedLocations[activeLocationIndex] = {
        ...updatedLocations[activeLocationIndex],
        label: location,
      };
      setLocations(updatedLocations);
      setIsMenuOpen(false);
      setIsPortMenuOpen(false);
      setIsMapOpen(false);
    }
  };

  const handleInputFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleInputBlur = (index: number) => {
    if (!isMenuOpen && !isPortMenuOpen && !isMapOpen) {
      setTimeout(() => {
        setFocusedIndex(null);
      }, 200);
    }
  };

  return (
    <div className="p-8 w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-8">{t("title")}</h1>

      {/* Progress Steps */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">
            {t("steps.locations.step")}
          </div>
          <span className="font-medium">{t("steps.locations.title")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
            {t("steps.selectTruck.step")}
          </div>
          <span className="text-gray-400">{t("steps.selectTruck.title")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
            {t("steps.time.step")}
          </div>
          <span className="text-gray-400">{t("steps.time.title")}</span>
        </div>
      </div>

      {/* Location Details */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">{t("locationDetails.title")}</h2>

        <div className="space-y-4">
          {locations.map((location, index) => (
            <div key={location.id} className="relative">
              <div className="relative flex items-center">
                <div className="absolute left-3 top-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-${location.color}-600`}
                  />
                </div>
                <Input
                  className="pl-12 pr-12 h-12 w-full"
                  placeholder={location.label}
                  value={location.label}
                  onFocus={() => handleInputFocus(index)}
                  onBlur={() => handleInputBlur(index)}
                  readOnly
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-2 text-red-500 hover:text-red-700"
                  onClick={() => removeLocation(index)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {(focusedIndex === index ||
                (isMenuOpen && activeLocationIndex === index) ||
                (isPortMenuOpen && activeLocationIndex === index) ||
                (isMapOpen && activeLocationIndex === index)) && (
                <div className="flex gap-2 mt-2 bg-white p-2 shadow rounded-lg flex-wrap">
                  <Button
                    variant="outline"
                    className={`flex items-center gap-1 ${
                      isAddressBookOpen ? "bg-accent" : ""
                    }`}
                    onClick={() => setIsAddressBookOpen(true)}
                  >
                    <Star className="h-4 w-4" />
                    {t("locationOptions.addressBook")}
                  </Button>

                  <AddressBookModal
                    isOpen={isAddressBookOpen}
                    onClose={() => setIsAddressBookOpen(false)}
                    onSelect={(address) => {
                      handleLocationSelect(address);
                      setIsAddressBookOpen(false);
                    }}
                  />
                  <Button
                    variant="outline"
                    className={`flex items-center gap-1 ${
                      isMapOpen && activeLocationIndex === index
                        ? "bg-accent"
                        : ""
                    }`}
                    onClick={() => openMap(index)}
                  >
                    <Map className="h-4 w-4" />
                    {t("locationOptions.map")}
                  </Button>
                  <Button
                    variant="outline"
                    className={`flex items-center gap-1 ${
                      isMenuOpen && activeLocationIndex === index
                        ? "bg-accent"
                        : ""
                    }`}
                    onClick={(e) => openDistrictMenu(e, index)}
                  >
                    <List className="h-4 w-4" />
                    {t("locationOptions.division")}
                  </Button>
                  <Button
                    variant="outline"
                    className={`flex items-center gap-1 ${
                      isPortMenuOpen && activeLocationIndex === index
                        ? "bg-accent"
                        : ""
                    }`}
                    onClick={(e) => openPortMenu(e, index)}
                  >
                    <Landmark className="h-4 w-4" />
                    {t("locationOptions.port")}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          className="text-red-600 pl-0 hover:bg-red-50"
          onClick={addLocation}
        >
          <Plus className="h-5 w-5 mr-2" />
          {t("actions.addStop")}
        </Button>
      </div>

      <CascadingMenu
        isOpen={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false);
          setTimeout(() => {
            setFocusedIndex(null);
          }, 200);
        }}
        onSelect={handleLocationSelect}
        position={menuPosition}
      />

      <PortMenu
        isOpen={isPortMenuOpen}
        onClose={() => {
          setIsPortMenuOpen(false);
          setTimeout(() => {
            setFocusedIndex(null);
          }, 200);
        }}
        onSelect={handleLocationSelect}
        position={menuPosition}
      />

      <MapModal
        isOpen={isMapOpen}
        onClose={() => {
          setIsMapOpen(false);
          setTimeout(() => {
            setFocusedIndex(null);
          }, 200);
        }}
        onSelect={handleLocationSelect}
      />
    </div>
  );
}
