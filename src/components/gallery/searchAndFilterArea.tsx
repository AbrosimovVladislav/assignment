"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";

// Возможные размеры изображений
const sizeOptions = [
    { label: "Small", value: 400 },
    { label: "Medium", value: 800 },
    { label: "Large", value: 1200 },
    { label: "Extra Large", value: 1600 },
];

export default function SearchAndFilterArea() {
    const isMobile = useIsMobile();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

    // Обработчик клика по кнопке фильтра
    const toggleSizeFilter = (size: number) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    };

    // Обработчик поиска
    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        console.log("Selected sizes:", selectedSizes);
    };

    return (
        <div className={`border border-green-300 p-4 rounded-lg shadow-md ${isMobile ? "flex flex-col gap-4" : "flex justify-between items-center"}`}>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-600">Search</p>
                <div className="flex items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Search photos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-64"
                    />
                    <Button variant="outline" size="icon" onClick={handleSearch}>
                        <Search className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-600">Size Filter</p>
                <div className={`flex gap-2 ${isMobile ? "flex-wrap" : ""}`}>
                    {sizeOptions.map((size) => (
                        <Button
                            key={size.value}
                            variant={selectedSizes.includes(size.value) ? "default" : "outline"}
                            onClick={() => toggleSizeFilter(size.value)}
                        >
                            {size.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
