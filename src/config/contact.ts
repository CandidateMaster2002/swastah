export const CONTACT_INFO = {
    whatsappNumber: "919850319154",
    defaultMessage: "Hello Swastah, I want to order Swastah Curcumin sachets",
};

export const getWhatsAppLink = (message: string = CONTACT_INFO.defaultMessage) => {
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
