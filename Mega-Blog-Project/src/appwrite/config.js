import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
           return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
           ) 
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
           await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
           ) 
           return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
    }

    async getPosts(userId) {
        try {
            if (!userId) {
                throw new Error("User ID is required to fetch posts");
            }
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('status','active'),
                    Query.equal('userId',userId)
                ]
           ) 
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
        }
    }

    //file upload servie

    async fileUpload(file) {
        try {
           return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
           )
        } catch (error) {
            console.log("Appwrite service :: fileUpload :: error", error)
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    async getFilePreview(fileId) {
        if (!fileId) {
            console.log("File ID is missing.");
            return null; // Return null if the fileId is missing or invalid
          }
        try {
            return await this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.log("Error fetching file preview:", error);
        return null;
        }    
    }
}

const service = new Service();

export default service