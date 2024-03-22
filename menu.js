document.addEventListener('DOMContentLoaded', function() {
    const menuItems = [
      { category: 'burgers', name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, onion, and special sauce', price: 8.99, image: 'images/Default_beautiful_awesome_burger_0.jpg' },
      { category: 'burgers', name: 'BBQ Bacon Burger', description: 'Grilled beef patty topped with crispy bacon, cheddar cheese, and tangy BBQ sauce', price: 9.99, image: 'images/Default_image_of_a_beautiful_awesome_burger_1.jpg' },
      { category: 'sides', name: 'Fries', description: 'Crispy golden fries served with ketchup', price: 3.99, image: 'images/Default_beautiful_picture_of_fries_with_ketchup_0.jpg' },
      { category: 'sides', name: 'Onion Rings', description: 'Deep-fried crunchy onion rings served with ranch dipping sauce', price: 4.99, image: 'images/Default_beautiful_picture_of_Deepfried_crunchy_onion_rings_ser_0.jpg' },
      { category: 'drinks', name: 'Soda', description: 'Refreshing soda in various flavors', price: 1.99, image: 'images/Default_beautiful_picture_of_Refreshing_soda_in_various_flavor_0.jpg' },
      { category: 'drinks', name: 'Iced Tea', description: 'Chilled iced tea with lemon slices', price: 2.49, image: 'images/Default_beautiful_picture_of_Chilled_iced_tea_with_lemon_slice_1.jpg' },
      { category: 'desserts', name: 'Chocolate Brownie', description: 'Decadent chocolate brownie topped with vanilla ice cream and chocolate syrup', price: 5.99, image: 'images/Default_beautiful_picture_of_Decadent_chocolate_brownie_topped_1.jpg' },
      { category: 'desserts', name: 'Vanilla Milkshake', description: 'Creamy vanilla milkshake served with whipped cream', price: 4.99, image: 'images/Default_beautiful_picture_of_Creamy_vanilla_milkshake_served_w_0.jpg' }
    ];
  
    const menuContainer = document.querySelector('.menu-items');
  
    
    function generateMenuItems(items) {
      menuContainer.innerHTML = '';
  
      items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">$${item.price.toFixed(2)}</p>
        `;
        menuContainer.appendChild(menuItem);
      });
    }
  
    
    generateMenuItems(menuItems);
  
    
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
        generateMenuItems(filteredItems);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  