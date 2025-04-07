export function validatePassword(password: string): { isValid: boolean; message: string } {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    return {
      isValid: false,
      message: `Password must be at least ${minLength} characters long`,
    }
  }

  if (!hasUpperCase || !hasLowerCase) {
    return {
      isValid: false,
      message: "Password must contain both uppercase and lowercase letters",
    }
  }

  if (!hasNumbers) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    }
  }

  if (!hasSpecialChar) {
    return {
      isValid: false,
      message: "Password must contain at least one special character",
    }
  }

  return {
    isValid: true,
    message: "Password is valid",
  }
}
