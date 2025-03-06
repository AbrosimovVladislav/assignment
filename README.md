This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Fullstack Developer Test Assignment (Next.js, TypeScript)

## Task Description

Develop a web application "Photo Explorer" that displays photos using the [Pexels API](https://www.pexels.com/api/).

### Functional Requirements:

1. **Public Page** — Display a photo gallery with search functionality and pagination
2. **Private Page** — View favorite photos (accessible only to authenticated users)
3. **Authentication** — Implement an authentication system of your choice (if using Next.js, [Auth.js](https://authjs.dev/) is preferred)
4. **Mobile Responsive Design** — The application should be functional on mobile viewports.
5. **Filter by Image Size** — Users should be able to filter photos based on their size.

### Scope Clarification
Your goal is to implement a solution that can be completed within a 3-hour timeframe. We recommend focusing on the core requirements first and then adding bonus features if time permits. It's better to deliver a well-executed implementation of the core functionality than to attempt all features with incomplete implementation. Please scope your work accordingly and document any design decisions or trade-offs you make due to the time constraint.

### Tech Stack:
- Next.js 14+ (App Router)
- TypeScript
- Any Database of Your Choice (MongoDB, PostgreSQL, MySQL, etc.)
- React with a State Manager of Your Choice (Effector preferred)

## Detailed Requirements:

### Public Page:
- Photo gallery with search box functionality
- Search by query (keywords)
- Pagination (either traditional numbered pages or infinite scroll)
- Display of photo details (photographer name, dimensions, download URL)
- Ability to add photos to favorites (for authenticated users)
- Filter by image size

### Private Page (Favorites):
- View list of favorite photos
- Ability to remove photos from favorites
- Store favorites using a database of your choice

### Backend Implementation:
- The project is packaged with Next.js.
- You are free to use Next.js for client-side and Next.js API routes for backend ([Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)) or implement your preferred backend solution.

## Bonus Tasks (optional):
- **Admin user who can view all users and their favorites** - Create an admin role with access to user data and favorites
- **Custom collections/folders** - Allow users to organize favorites into custom collections
- **Search history** - Save and display recent user searches
- **Photo sharing** - Ability to share photos via social media or copy links
- **Photo download functionality** - Allow users to download photos in different resolutions

## UI Implementation:
- You are free to use any UI library of your choice
- There are no specific design requirements
- The final version should be functional and have no UI/UX issues

## Submission

1. Treat this assignment as you would a regular task in a live project - write clean, maintainable code, follow best practices for branching, code review, etc.
2. Push your changes to the provided repository.
3. Include a README.md file in the repository with:
   - Project structure description
   - Setup and running instructions
   - List of technologies and libraries used
   - Brief description of implemented functionality

## Evaluation Criteria:
- Code quality and architecture
- Functionality of all required features
- Security, especially regarding authentication
- Compliance with TypeScript requirements (typing)
- Optimization of API and database queries
- User experience (UI/UX)

## Notes:
- To work with the Pexels API, you need to obtain a free API key: https://www.pexels.com/api/
- Estimated completion time: up to 3 hours

Good luck with your assignment!

