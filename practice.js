// Data for each category with items
const categories = {
    Shirts: {
        description: "A selection of stylish shirts for all occasions.",
        items: [
            { name: "1", image: "https://i.pinimg.com/736x/ad/2b/26/ad2b26d4fbe94023cb3ea89f80c900f4.jpg" },
            { name: "2", image: "https://i.pinimg.com/474x/60/e4/57/60e4575ffe84ad7f14d70682a24e27b1.jpg" },
            { name: "3", image: "https://i.pinimg.com/736x/ef/a1/e4/efa1e467e3f7c1a8381bdc97f6c6b490.jpg" },
            { name: "4", image: "https://i.pinimg.com/736x/93/33/d5/9333d56c74e59d81dc2e0848046713cd.jpg" },
            { name: "5", image: "https://i.pinimg.com/736x/6e/23/a6/6e23a655c708281ca012b8d927f71042.jpg" },
            { name: "6", image: "https://i.pinimg.com/236x/2e/04/75/2e0475c534feddffc118d59f2c6517ed.jpg" },
        ],
    },
    Skirts: {
        description: "Elegant skirts to match your style.",
        items: [
            { name: "1", image: "https://i.pinimg.com/236x/74/e4/2b/74e42b470ebbc89c04004f19e4a290e9.jpg" },
            { name: "2", image: "https://i.pinimg.com/236x/bf/72/bd/bf72bda00d55920e3c46790d25af1e6b.jpg" },
            { name: "3", image: "https://i.pinimg.com/236x/e6/73/e6/e673e65584b4f58d0bc42e64fec3011f.jpg" },
            { name: "4", image: "https://i.pinimg.com/236x/26/58/41/265841bb576b5ec33ff6c902e7eeffa7.jpg" },
            { name: "5", image: "https://i.pinimg.com/236x/dd/d7/80/ddd78011fc8030a7fc8f3f50cd5746ef.jpg" },
            { name: "6", image: "https://i.pinimg.com/236x/9e/f1/7d/9ef17df17a5aaa130ed1b67424300217.jpg" },
        ],
    },
    Dress: {
        description: "Trendy dresses for casual outings.",
        items: [
            { name: "1", image: "https://i.pinimg.com/736x/20/32/cf/2032cf4367d96a61461fa74901fe3225.jpg" },
            { name: "2", image: "https://i.pinimg.com/236x/05/c0/cd/05c0cd58cac840645fd56a6592810515.jpg" },
            { name: "3", image: "https://i.pinimg.com/736x/11/9e/e9/119ee9ae53854eedb2ab47e597548a4c.jpg" },
            { name: "4", image: "https://i.pinimg.com/474x/f3/65/c9/f365c9cdd7e080aa241569f5b162c5c1.jpg" },
            { name: "5", image: "https://i.pinimg.com/736x/54/5a/e1/545ae1ac524401741d3b02e899a9f8dc.jpg" },
            { name: "6", image: "https://i.pinimg.com/236x/86/86/cb/8686cbaf88d09965731f9eec5fc2c0ef.jpg" },
        ],
    },
    Bags: {
        description: "Durable and fashionable bags for every need.",
        items: [
            { name: "1", image: "https://i.pinimg.com/236x/d4/44/c7/d444c7edf4fbbcc0a5fb36c7dc9f4d77.jpg" },
            { name: "2", image: "https://i.pinimg.com/236x/e6/7c/3d/e67c3dc4c03d0a93e89c5dbdfcb0a832.jpg" },
            { name: "3", image: "https://i.pinimg.com/236x/8b/5c/b4/8b5cb41cf32b75217ecbeaaf95664e0f.jpg" },
            { name: "4", image: "https://i.pinimg.com/236x/47/4a/f8/474af839471a2d148cb938e099001b17.jpg" },
            { name: "5", image: "https://i.pinimg.com/236x/39/3d/3f/393d3fe17d47ded98cdc46f2108ae5e0.jpg" },
            { name: "6", image: "https://i.pinimg.com/236x/21/4e/b3/214eb3518d5a7926dea6ced26307400c.jpg" },
        ],
    },
};

// Function to show the selected category and its items
function showCategory(category) {
    const title = document.getElementById('categoryTitle');
    const description = document.getElementById('categoryDescription');
    const itemsContainer = document.getElementById('itemsContainer');

    // Update title and description
    title.textContent = category;
    description.textContent = categories[category].description;

    // Clear previous items
    itemsContainer.innerHTML = "";

    // Display items
    categories[category].items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}
