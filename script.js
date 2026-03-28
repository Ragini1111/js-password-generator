function generatePassword() {
    const length =12;
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for(let i=0; i<length; i++) {
        password += chars[array[i] % chars.length];
    }
    document.getElementById('password').value = password;
}