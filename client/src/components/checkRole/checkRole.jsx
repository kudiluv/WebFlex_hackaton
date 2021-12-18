export const checkRole = {
    teacher: (role) => {
        if (role === "teacher") 
            return true;
        else 
            return false
    },
    admin: (role) => {
        if (role === "admin") 
            return true;
        else 
            return false
    },
    student: (role) => {
        if (role === "student") 
            return true;
        else 
            return false
    }
}