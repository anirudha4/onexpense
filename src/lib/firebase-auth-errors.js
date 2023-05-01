function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
        case "auth/wrong-password":
            return "Password provided is not corrected";

        case "auth/user-not-found":
            return "Email provided is invalid";

        default:
            return "Something went wrong";
    }
}
export {
    mapAuthCodeToMessage
}