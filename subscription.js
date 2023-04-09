// Define the subscription plans and their prices
const plans = [
    { name: 'Basic Plan', price: 9.99 },
    { name: 'Pro Plan', price: 19.99 },
    { name: 'Ultimate Plan', price: 49.99 }
  ];
  
  // Get the plan container element
  const planContainer = document.getElementById('plan-container');
  
  // Loop through each plan and create a card for it
  plans.forEach(plan => {
    // Create the plan card element
    const card = document.createElement('div');
    card.classList.add('plan-card');
  
    // Add the plan name and price to the card
    const name = document.createElement('h3');
    name.textContent = plan.name;
    card.appendChild(name);
  
    const price = document.createElement('p');
    price.textContent = `$${plan.price}/month`;
    card.appendChild(price);
  
    // Add the card to the plan container
    planContainer.appendChild(card);
  
    // Create the subscribe button and add it to the card
    const subscribeButton = document.createElement('button');
    subscribeButton.classList.add('subscribe-button');
    subscribeButton.textContent = 'Subscribe Now';
    subscribeButton.dataset.plan = plan.name;
    card.appendChild(subscribeButton);
  
    // Add an event listener to the subscribe button
    subscribeButton.addEventListener('click', () => {
      // Replace this console.log statement with your subscription code
      console.log(`Subscribing to ${plan.name} plan...`);
    });
  });
  