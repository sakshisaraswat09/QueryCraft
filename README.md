# QueryCraft

QueryCraft is a lightweight and efficient SQL query editor that allows users to write, test, and execute SQL queries in a simple web-based interface. The project is built with a focus on performance and responsiveness, ensuring a seamless user experience.

## Tech Stack

- **JavaScript Framework:** React.js  
- **Deployment:** Vercel  
- **Major Packages Used:**  
  - CodeMirror (for the query editor)  
  - React Query (for managing server state)  

## Performance Metrics

The page load time was measured using **GTmetrix** on **March 27, 2025**. Below are the results:

- **GTmetrix Grade:** A  
- **Performance:** 100%  
- **Structure:** 99%  
- **Largest Contentful Paint (LCP):** 285ms  
- **Total Blocking Time (TBT):** 0ms  
- **Cumulative Layout Shift (CLS):** 0

  ### GTmetrix Report

  ![image](https://github.com/user-attachments/assets/0cad5b53-6f6e-4203-ace7-a7c9b7e61d2e)

  ###  Lighthouse Report (Desktop View)

  ![image](https://github.com/user-attachments/assets/8ca0c41f-9888-4079-be60-f7cb3d4c7577)

  ### Lighthouse Report (Mobile View)

  ![image](https://github.com/user-attachments/assets/46cd8be4-9679-4b18-bc14-a7a94c29092d)


## Optimizations Implemented

To achieve high performance and low load time, the following optimizations were applied:

- **Minimized Render Blocking Resources:** Used optimized CSS and JavaScript bundles to prevent unnecessary blocking of the rendering process.  
- **Efficient State Management:** Used React Query to fetch and cache data efficiently, reducing redundant network requests.  
- **CDN & Caching Strategies:** Leveraged Vercel’s CDN for faster global delivery and caching mechanisms to store frequently accessed data.  

This ensures the application remains **lightweight, fast, and highly responsive**, providing an optimal user experience.
