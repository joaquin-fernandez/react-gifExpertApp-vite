import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Pokemon"]);

    const onAddCategory = (newCategory) => {
        if (categories.findIndex((category) => category.trim().toLowerCase() === newCategory.trim().toLowerCase()) > -1) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
