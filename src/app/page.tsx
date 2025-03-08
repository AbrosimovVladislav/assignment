import GalleryArea from "@/components/gallery/galleryArea";
import SearchAndFilterArea from "@/components/gallery/searchAndFilterArea";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <SearchAndFilterArea/>
            <GalleryArea/>
        </div>
    );
}
