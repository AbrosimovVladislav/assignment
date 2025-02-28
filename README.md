This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Fullstack Developer Test Assignment (Next.js, MongoDB, TypeScript)

## Task Description

Develop a web application "Photo Explorer" that displays photos using the [Pexels API](https://www.pexels.com/api/).

### Functional Requirements:

1. **Public Page** — Display a photo gallery with search functionality and pagination
2. **Private Page** — View favorite photos (accessible only to authenticated users)
3. **Authentication** — Implement an authentication system using method of your choice (Auth.js or other)
4. **Mobile Responsive Design** — Application should be functional on mobile viewport.

### Scope Clarification
Your goal is to implement a solution that can be completed within a 2-hour timeframe. We recommend focusing on the core requirements first and then adding bonus features if time permits. It's better to deliver a well-executed implementation of the core functionality than to attempt all features with incomplete implementation. Please scope your work accordingly and document any design decisions or trade-offs you make due to the time constraint.

### Tech Stack:
- Next.js 14+ (App Router)
- TypeScript
- MongoDB

## Detailed Requirements:

### Public Page:
- Photo gallery with search box functionality
- Search by query (keywords)
- Pagination (either traditional numbered pages or infinite scroll)
- Display of photo details (photographer name, dimensions, download URL)
- Ability to add photos to favorites (for authenticated users)

### Private Page (Favorites):
- View list of favorite photos
- Ability to remove photos from favorites
- To implement favorites feature MongoDB should be used

### Authentication:
- User registration and login
- User data storage in MongoDB
- No password reset functionality required



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
- You can use MongoDB Atlas (free tier) for development
- Estimated completion time: 1-2 hours
- If you have any questions about the assignment, please contact: [contact email]

Good luck with your assignment!

The repository comes with a docker-compose.yml file to easily run MongoDB, to spin this up:

```sh
> $ docker-compose up -d
```

You should be able to connect to MongoDB using any client at localhost:27017 (the default MongoDB port). The credentials can be found in the `docker-compose.yml` file.

