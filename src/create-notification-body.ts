import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipentId: string;
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  category: string;
}
