import Image from "next/image";
import React from "react";

type MeetingEmailType = {
    chefName: string,
    bookingType: string
    date: string
    time: string
    duration: number
    location: string
    clientEmail: string
    service: string
};

const MeetingEmailFormat = ({
    chefName,
    bookingType,
    date,
    time,
    duration,
    location,
    clientEmail,
    service
}: MeetingEmailType) => {
    return (
        <div style={styles.wrapper}>
            {/* Header */}
            <div style={styles.header}>
                <h1 style={styles.logo}>
                    <img src={'http://localhost:3000/_next/image?url=%2Flogo.png&w=64&q=75'} width={200} height={200} alt=" " />
                    <span className="text-primary">Modern</span> Kitchen
                </h1>
            </div>

            {/* Title */}
            <h2 style={styles.title}>Appointment Confirmed! </h2>

            {/* Intro */}
            <p style={styles.text}>
                Hi there,
                <br />
                <br />
                Your 1:1 cooking session with chef has been booked. Here are the
                details:
            </p>

            {/* Details Card */}
            <div style={styles.card}>
                <DetailRow label="Chef" value={chefName} />
                <DetailRow label="Appointment Type" value={bookingType} />
                <DetailRow label="Service Requested" value={service} />
                <DetailRow label="Date" value={date} />
                <DetailRow label="Time" value={time} />
                <DetailRow label="Duration" value={`${duration} min`} />
                <DetailRow label="Location" value={location} />
            </div>

            {/* Note */}
            <p style={styles.note}>
                Please arrive <strong>15 minutes early</strong> for your appointment. If
                you need to reschedule or cancel, please contact us at least 24 hours in
                advance.
            </p>

            {/* CTA */}
            <a
                href="https://modernkitchen.com/appointments"
                style={styles.button}
                target="_blank"
                rel="noreferrer"
            >
                View My Appointments
            </a>

            {/* Footer */}
            <p style={styles.footer}>
                Best regards,
                <br />
                The Modern Kitchen Team
            </p>

            <p style={styles.support}>
                If you have any questions, contact us at{" "}
                <a href={`mailto:${clientEmail}`} style={styles.link}>
                    {clientEmail}
                </a>
            </p>
        </div>
    );
};

/* ---------------------------------- */
/* Reusable Detail Row                */
/* ---------------------------------- */
const DetailRow = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <div style={styles.row}>
        <p style={styles.label}>{label}</p>
        <p style={styles.value}>{value}</p>
    </div>
);

/* ---------------------------------- */
/* Inline Styles (Email-safe)          */
/* ---------------------------------- */
const styles: Record<string, React.CSSProperties> = {
    wrapper: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "32px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#1f2937",
    },
    header: {
        textAlign: "center",
        marginBottom: "12px",
    },
    logo: {
        margin: 0,
        fontSize: "24px",
        color: "#2563eb",
    },
    title: {
        textAlign: "center",
        fontSize: "22px",
        margin: "24px 0",
    },
    text: {
        fontSize: "14px",
        lineHeight: "1.6",
    },
    card: {
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "16px",
        backgroundColor: "#f9fafb",
    },
    row: {
        marginBottom: "12px",
    },
    label: {
        margin: 0,
        fontSize: "12px",
        color: "#6b7280",
    },
    value: {
        margin: 0,
        fontSize: "14px",
        fontWeight: 600,
    },
    note: {
        fontSize: "13px",
        marginTop: "20px",
        lineHeight: "1.5",
    },
    button: {
        display: "block",
        margin: "28px auto",
        padding: "12px 20px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        textAlign: "center",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: 600,
        width: "fit-content",
    },
    footer: {
        marginTop: "24px",
        fontSize: "14px",
    },
    support: {
        fontSize: "12px",
        color: "#6b7280",
    },
    link: {
        color: "#2563eb",
        textDecoration: "none",
    },
};

export default MeetingEmailFormat;
