import SearchArea from "@/components/gallery/searchArea";
import FilterArea from "@/components/gallery/filterArea";
import GalleryArea from "@/components/gallery/galleryArea";

export default function Home() {
    return (
        <div className="">
            <SearchArea/>
            <FilterArea/>
            <GalleryArea/>
        </div>
    );
}
