const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID)

const client = new Client()
  .setEndpoint('https:cloud.appwrite.io/v1')
  .setProject(PROJECT_ID)

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await
  } catch (error) {
    console.log(error)
  }
  
}