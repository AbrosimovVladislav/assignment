"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Image from "next/image";
import { Heart } from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";

// Пример данных (потом заменим на API)
const mockPhotos = [
    {
        id: "1",
        src: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        photographer: "John Doe",
        width: 800,
        height: 600,
        downloadUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800",
    },
    {
        id: "2",
        src: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        photographer: "Jane Smith",
        width: 800,
        height: 600,
        downloadUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800",
    },
    {
        id: "3",
        src: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
        photographer: "Emily Brown",
        width: 800,
        height: 600,
        downloadUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
    },
];

export default function GalleryArea() {
    const isMobile = useIsMobile();
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="border border-orange-300 p-4 rounded-lg shadow-md">
            <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4`}>
                {mockPhotos.map((photo) => (
                    <Card key={photo.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <Image
                                src={photo.src}
                                alt={`Photo by ${photo.photographer}`}
                                width={photo.width}
                                height={photo.height}
                                className="w-full h-48 object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-sm font-semibold">{photo.photographer}</p>
                            <p className="text-xs text-gray-500">{photo.width}x{photo.height} px</p>
                            <a href={photo.downloadUrl} target="_blank" className="text-xs text-blue-600 underline">
                                Download
                            </a>
                        </CardContent>
                        <CardFooter className="p-4 flex justify-end">
                            <Button variant="ghost" size="icon">
                                <Heart className="w-5 h-5 text-red-500" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Пагинация */}
            <div className="mt-4 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
                        </PaginationItem>
                        <PaginationItem>
                            <span className="px-4 py-2 text-sm">{currentPage}</span>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext onClick={() => setCurrentPage((prev) => prev + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
