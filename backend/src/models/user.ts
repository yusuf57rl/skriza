import mongoose, { Schema, Document, Model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    googleId?: string;
    secrets: string[];
    facebookId?: string;
}

export interface IUserModel extends Model<IUser> {
    findOrCreate(condition: any, doc: any, callback: (err: any, res: any) => void): void;
    register(user: IUser, password: string, callback: (err: any, account: any) => void): void;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secrets: [String],
    facebookId: String,
});

userSchema.plugin(passportLocalMongoose);

userSchema.statics.findOrCreate = function (condition, doc, options, callback) {
    const self = this;
    self.findOne(condition, (err: any, result: any) => {
        if (result) {
            callback(err, result);
        } else {
            self.create(doc, options, (err: any, result: any) => {
                callback(err, result);
            });
        }
    });
};

userSchema.statics.register = function (user: IUser, password: string, callback: (err: any, account: any) => void) {
    const UserModel = this as IUserModel;  // Cast to IUserModel
    const newUser = new UserModel(user);
    UserModel.register(newUser, password, (err, account) => {
        callback(err, account);
    });
};

export default mongoose.model<IUser, IUserModel>('User', userSchema);
