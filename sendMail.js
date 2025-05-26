import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // mesiace sú 0-indexované
    const year = date.getFullYear();
    return `${day}. ${month}. ${year}`;
}
const sendSupportMail = (data) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ffcars.websystem@gmail.com",
                pass: process.env.GMAIL_SECRET
            }
        });
        const mailOptions = {
            from: "ffcars.websystem@gmail.com",
            to: "kubko.kratochvil@gmail.com",
            subject: "Objednávka z webu",
            html: `<div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #333;">
                    <div style="background-image: url(https://raw.githubusercontent.com/JakubKRATO/pozicovnaAut/main/static/img/emailAdmin.png);
                            background-size: cover; 
                            background-position: center;
                            border-radius: 10px;
                            min-height: 120px;
                            position: relative;
                            display: flex;
                            justify-content: center;"></div>
                        <h3 style="margin-top: 35px;">🧍‍♂️ Osobné údaje</h3>
                        <p><strong>Meno:</strong> ${data.meno} ${data.priezvisko}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Telefón:</strong> ${data.telefon}</p>
                        <p><strong>Rodné číslo:</strong> ${data.rodneCislo}</p>
    
                        <h3 style="margin-top: 35px;">🏠 Adresa</h3>
                        <p><strong>Ulica:</strong> ${data.adresa}</p>
                        <p><strong>Mesto:</strong> ${data.mesto}</p>
                        <p><strong>PSČ:</strong> ${data.psc}</p>
                        <p><strong>Krajina:</strong> ${data.krajina}</p>
    
                        <h3 style="margin-top: 35px;">📍 Miesto prevzatia a vrátenia</h3>
                        <p><strong>Miesto prevzatia:</strong> ${data.m1}</p>
                        <p><strong>Miesto vrátenia:</strong> ${data.m2}</p>
    
                        <h3 style="margin-top: 35px;">📅 Termín</h3>
                        <p><strong>Od:</strong> ${formatDate(data.d1)} o ${data.c1}</p>
                        <p><strong>Do:</strong> ${formatDate(data.d2)} o ${data.c2}</p>
    
                        <h3 style="margin-top: 35px;">💶 Platba</h3>
                        <p><strong>Spôsob platby:</strong> ${data.platba === "cash" ? "V hotovosti" : "Bankovým prevodom"}</p>
    
                        <p style="margin-top: 40px; font-size: 0.9rem; color: #aaaaaa;">
                            Tento e-mail bol vygenerovaný automaticky systémom <strong>FFcars</strong>.<br>
                        </p>
                        <p style="font-size: 0.7rem;"><strong>Neodpovedajte na tento e-mail</strong> – odpovede nie sú monitorované.</p>
                    </div>`
    };
    transport.sendMail(mailOptions, (err,info) => {
        console.log(info,err);
        if (err) {
            return err
        }
        return info
    });
    return true

    } catch (error) {
        return false
    }
};
const sendMailAdmin = (data) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ffcars.websystem@gmail.com",
                pass: process.env.GMAIL_SECRET
            }
        });
        const mailOptions = {
            from: "ffcars.websystem@gmail.com",
            to: "kubko.kratochvil@gmail.com",
            subject: "Objednávka z webu",
            html: `<div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #333;">
                    <div style="background-image: url(https://raw.githubusercontent.com/JakubKRATO/pozicovnaAut/main/static/img/emailAdmin.png);
                            background-size: cover; 
                            background-position: center;
                            border-radius: 10px;
                            min-height: 120px;
                            position: relative;
                            display: flex;
                            justify-content: center;"></div>
                        <h3 style="margin-top: 35px;">🧍‍♂️ Osobné údaje</h3>
                        <p><strong>Meno:</strong> ${data.meno} ${data.priezvisko}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Telefón:</strong> ${data.telefon}</p>
                        <p><strong>Rodné číslo:</strong> ${data.rodneCislo}</p>
    
                        <h3 style="margin-top: 35px;">🏠 Adresa</h3>
                        <p><strong>Ulica:</strong> ${data.adresa}</p>
                        <p><strong>Mesto:</strong> ${data.mesto}</p>
                        <p><strong>PSČ:</strong> ${data.psc}</p>
                        <p><strong>Krajina:</strong> ${data.krajina}</p>
    
                        <h3 style="margin-top: 35px;">📍 Miesto prevzatia a vrátenia</h3>
                        <p><strong>Miesto prevzatia:</strong> ${data.m1}</p>
                        <p><strong>Miesto vrátenia:</strong> ${data.m2}</p>
    
                        <h3 style="margin-top: 35px;">📅 Termín</h3>
                        <p><strong>Od:</strong> ${formatDate(data.d1)} o ${data.c1}</p>
                        <p><strong>Do:</strong> ${formatDate(data.d2)} o ${data.c2}</p>
    
                        <h3 style="margin-top: 35px;">💶 Platba</h3>
                        <p><strong>Spôsob platby:</strong> ${data.platba === "cash" ? "V hotovosti" : "Bankovým prevodom"}</p>
    
                        <p style="margin-top: 40px; font-size: 0.9rem; color: #aaaaaa;">
                            Tento e-mail bol vygenerovaný automaticky systémom <strong>FFcars</strong>.<br>
                        </p>
                        <p style="font-size: 0.7rem;"><strong>Neodpovedajte na tento e-mail</strong> – odpovede nie sú monitorované.</p>
                    </div>`
    };
    transport.sendMail(mailOptions, (err,info) => {
        console.log(info,err);
        if (err) {
            return err
        }
        return info
    });
    return true

    } catch (error) {
        return false
    }
};
const sendMailClient = (data) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "ffcars.websystem@gmail.com",
                pass: process.env.GMAIL_SECRET
            }
        });
    const mailOptions = {
        from: "ffcars.websystem@gmail.com",
        to: "kubko.kratochvil@gmail.com",
        subject: "Doklad o vašej objednávke",
        html: `<div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; background-color: #1a1a1a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #333;">
                <div style="background-image: url(https://raw.githubusercontent.com/JakubKRATO/pozicovnaAut/main/static/img/emailClient.png);
                        background-size: cover; 
                        background-position: center;
                        border-radius: 10px;
                        min-height: 120px;
                        position: relative;
                        display: flex;
                        justify-content: center;"></div>
                    <h3 style="margin-top: 35px;">🧍‍♂️ Osobné údaje</h3>
                    <p><strong>Meno:</strong> ${data.meno} ${data.priezvisko}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Telefón:</strong> ${data.telefon}</p>
                    <p><strong>Rodné číslo:</strong> ${data.rodneCislo}</p>
    
                    <h3 style="margin-top: 35px;">🏠 Adresa</h3>
                    <p><strong>Ulica:</strong> ${data.adresa}</p>
                    <p><strong>Mesto:</strong> ${data.mesto}</p>
                    <p><strong>PSČ:</strong> ${data.psc}</p>
                    <p><strong>Krajina:</strong> ${data.krajina}</p>
    
                    <h3 style="margin-top: 35px;">📍 Miesto prevzatia a vrátenia</h3>
                    <p><strong>Miesto prevzatia:</strong> ${data.m1}</p>
                    <p><strong>Miesto vrátenia:</strong> ${data.m2}</p>
    
                    <h3 style="margin-top: 35px;">📅 Termín</h3>
                    <p><strong>Od:</strong> ${formatDate(data.d1)} o ${data.c1}</p>
                    <p><strong>Do:</strong> ${formatDate(data.d2)} o ${data.c2}</p>
    
                    <h3 style="margin-top: 35px;">💶 Platba</h3>
                    <p><strong>Spôsob platby:</strong> ${data.platba === "cash" ? "V hotovosti" : "Bankovým prevodom"}</p>
    
                    <p style="margin-top: 40px; font-size: 0.9rem; color: #aaaaaa;">
                        Tento e-mail bol vygenerovaný automaticky systémom <strong>FFcars</strong>.<br>
                    </p>
                    <p style="font-size: 0.7rem;"><strong>Neodpovedajte na tento e-mail</strong> – odpovede nie sú monitorované.</p>
                </div>`
    };
        transport.sendMail(mailOptions, (err,info) => {
            console.log(info,err);
            
            if (err) {
                return err
            }
            return info
        });
        return true
    } catch (error) {
        return false
    }
};

export default { sendMailAdmin, sendMailClient, sendSupportMail};