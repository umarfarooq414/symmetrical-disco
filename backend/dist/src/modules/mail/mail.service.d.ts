import { IAccountVerificationTemplate } from '@lib/types/email';
import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendVerificationMail(email: string, verificationTemplate: IAccountVerificationTemplate): Promise<void>;
}
