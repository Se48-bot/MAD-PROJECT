# MAD-PROJECT
Agro Connect Hub Ghana

Agro Connect Hub Ghana is a web-based platform designed to connect farmers, buyers, and agribusiness stakeholders in Ghana. 
It provides dashboards for both buyers and farmers, enabling seamless transactions and market access.

Features

Main Site: This is the Overview of Agro Connect Hub Ghana and its mission.

Buyer Dashboard: It provides market insights, purchase options, and communication tools for buyers.

Farmer Dashboard: It allows farmers to list products, view buyer requests, and manage transactions.

Interactive JavaScript Functionality: This part of the project improves user engagement and site navigation.

Style custom slider componentfeat: Initialize Tailwind CSS and project structure

This commit would set up the initial project files and integrate the Tailwind CSS CDN. It would also include the basic Tailwind configuration for custom colors and border radii.

Add mobile menu functionality: This commit would add the JavaScript for the mobile menu toggle, allowing users to open and close the menu on smaller screens.

Implement product view toggles: This commit would introduce the functionality to switch between grid and list views for the product display.

Add interactive filter controls: This commit would include the logic for the filintegration by adding functions for user login and registration.

Implement product fetching from API: This commit would add the function to fetch product data from the REST API endpoint.

Add order creation and fetching functionality: This commit would introduce the functions for creating new orders and fetching a user's order history from the API.

Modern UI with Tailwind CSS: A clean, responsive design built with the utility-first Tailwind CSS framework.

Interactive Product Display: Users can toggle between grid and list views to browse products.

Dynamic Filters: Filtering options with interactive checkboxes and radio buter sidebar toggle, as well as the interactive behavior for checkboxes and radio buttons.

This commit would add the dynamic CSS styling for the slider input element to match the project's visual theme.

Setup REST API for authentication: This commit would lay the groundwork for backend ttons to refine product searches.

Responsive Navigation: A collapsible mobile menu for easy navigation on all device sizes.

REST API Integration:
    User Authentication: Secure login and registration functionality.
    
    Product Management: Fetch and display a list of available agricultural products.
    
    Order System: Create and view a history of orders.

File Structure
- `Agro-Connect-Hub-Ghana.html` - Main landing page.
- `Agro-Connect-Hub-Ghana.js` - JavaScript logic for the main site.
- `Buyer-Dashboard-Overview.html` - Buyer dashboard page.
- `Buyer-Dashboard-Overview.js` - JavaScript logic for buyer dashboard.
- `Farmer-Dashboard.html` - Farmer dashboard page.
- `.vscode/settings.json` - VS Code workspace settings.

Installation & Usage
1. Clone this repository or download the project files.
2. Open the `.html` files in a web browser to view the pages.
3. Make sure the `.js` files are in the same directory as their corresponding HTML files.

Commit History

-2025-07-01: Initial project setup with basic HTML structure for Agro Connect Hub Ghana
  - Files: Agro-Connect-Hub-Ghana.html

-2025-07-03: Added JavaScript interactivity to main site
  - Files: Agro-Connect-Hub-Ghana.js

-2025-07-05: Created Buyer Dashboard Overview page
  - Files: Buyer-Dashboard-Overview.html

-2025-07-06: Added scripts for Buyer Dashboard interactivity
  - Files: Buyer-Dashboard-Overview.js

-2025-07-08: Created Farmer Dashboard page
  - Files: Farmer-Dashboard.html

-2025-07-09: Added VS Code workspace settings
  - Files: .vscode/settings.json

The project was built with;

HTML5: The markup language for the project.

JavaScript: For all interactive elements and API integrations.

Tailwind CSS: The styling framework used for the user interface.

Remixicon: An open-source icon library.

# Agro Connect Hub Ghana

## PWA (installable web app)
- Files added: `manifest.webmanifest`, `service-worker.js`, `pwa-register.js`
- Homepage `<head>` now links the manifest and registers the SW.

How to test locally (simple):
1. Serve over HTTPS or use a local web server.
2. Open `New folder (10)/Agro-Connect-Hub-Ghana.html`.
3. In Chrome: Application tab → Manifest shows install prompt when criteria met.

## Capacitor (Android/iOS wrapper)
1. Install Node.js 18+.
2. In project root:
   ```bash
   npm install
   npm run cap:init # initializes if needed
   npm run cap:add:android
   npm run cap:add:ios  # optional on macOS with Xcode
   npm run cap:sync
   npm run cap:open:android  # opens Android Studio
   # or
   npm run cap:open:ios      # opens Xcode
   ```
3. Build/sign with the native IDEs.

Notes:
- `capacitor.config.ts` uses `New folder (10)` as the web directory.
- Replace the icon URLs in `manifest.webmanifest` with your own assets when ready.
