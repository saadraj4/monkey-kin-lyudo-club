// export const BASEURL = "http://192.168.1.254:9091"

// export const 
export const BASEURL = "http://192.168.1.8:9091"
export const ImageURLAPI = "/api/admin/image-upload";
export const DashboardAPI = {
    registeredPlayers: "/api/player/registered-count",
    totalWinningCoins: "/api/admin/game-winning-total-coins",
    onlinePlayers: "/api/player/online",
    recentRegistrations: "/api/player/latest-registrations",
    leaguePlayers: "/api/admin/league",
};

export const LoginAPI = {
    login: "/api/admin/login",
    resend_login_otp:"/api/admin/resend-otp",
    reset_Password_otp: "/api/admin/reset-password-otp",
    request_Password: "/api/admin/request-reset-otp",
    resend_reset_otp: "/api/admin/resend-reset-otp-pass",
}

export const UserAPI={
    create_player:"/api/player/create",
    search_player:"/api/player/all?full_name=",
    get_all_players:"/api/player/all"
}

export const NotificationAPI={
    create_Notification:"/api/admin/notification/create",
    reuse_Notification:"/api/admin/notification/reuse/",
    get_all_notifications:"/api/admin/notification/all"
}



