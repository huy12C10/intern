import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  address: string;

  @Prop({default: "LOCAL"})
  accountType: string;

  @Prop({default:false})
  isActive: boolean;

  @Prop()
  codeExpired: Date;

  @Prop()
  codeId: string;


}

export const UserSchema = SchemaFactory.createForClass(User);