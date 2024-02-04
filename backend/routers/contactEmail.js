import express, { text } from "express";
import nodemailer from "nodemailer";

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDate = `${day} ${month} ${year}`;
const formattedTime = `${hours}:${minutes}`

const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail", // e.g., "gmail", "yahoo", etc.
    auth: {
        user: "mindscale.health@gmail.com", /// user email
        /* check https://support.google.com/accounts/answer/185833 for setting up passwords for applications*/
        pass: "gaic xnpb fpbq vaep", //password of the email generated
    },
});

router.post("/sendmail", async (req, res) => {
    try {
        const { name, email, phoneNumber, query } = req.body;
        console.log(
            "Name:",
            name,
            "\nemail:",
            email,
            "\nPhone number:",
            phoneNumber,
            "\nmessage:",
            query,
        );
        const mailOptions = {
            // from: "your-email@example.com", // Replace with the actual sender's email
            to: email,
            subject: "Thank You for Confirming Your Health Check",
            text: `Subject: Thank You for Confirming Your Health Check\n\n
Dear ${name},\n\n
We hope this email finds you well. We want to express our gratitude for taking the time to confirm your health checking appointment with us. Your commitment to prioritizing your health and well-being is commendable, and we appreciate your cooperation.\n\n
Confirmation Details:\n\n
Date: ${formattedDate}\n
Time: ${formattedTime}\n
As a reminder, please ensure you have any necessary documents or information required for the health check. If you have any questions or need to reschedule, please do not hesitate to contact us at [Your Contact Information].\n\n
We look forward to providing you with excellent service and assisting you on your journey to optimal health.\n\n
Thank you once again for choosing [Your Health Center/Organization]. We appreciate your trust and confidence in our services.\n\n
Best regards,\n\n
Diversion Health App\n
Health App\n`,
        };
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;


/*Subject: Thank You for Confirming Your Health Check

Dear [Recipient's Name],

We hope this email finds you well. We want to express our gratitude for taking the time to confirm your health checking appointment with us. Your commitment to prioritizing your health and well-being is commendable, and we appreciate your cooperation.

Confirmation Details:

Date: [Date]
Time: [Time]
Location: [Health Center/Address]
As a reminder, please ensure you have any necessary documents or information required for the health check. If you have any questions or need to reschedule, please do not hesitate to contact us at [Your Contact Information].

We look forward to providing you with excellent service and assisting you on your journey to optimal health.

Thank you once again for choosing [Your Health Center/Organization]. We appreciate your trust and confidence in our services.

Best regards,

[Your Full Name]
[Your Title/Position]
[Your Health Center/Organization]
[Contact Information]
*/