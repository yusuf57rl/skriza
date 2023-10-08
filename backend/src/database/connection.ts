import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://<username><password>@cluster0.xtywonj.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions);  // Use ConnectOptions for connection options
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

export default connectDB;
