function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
        case "auth/invalid-password":
            return "Password provided is not corrected";

        case "auth/invalid-email":
            return "Email provided is invalid";

        default:
            return "Something went wrong";
    }
}

export {
    mapAuthCodeToMessage
}