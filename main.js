let registeredUser = null;
let registeredPass = null;
// phần chương trình đầu
function hideAll() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('profile').classList.add('hidden');
    document.getElementById('review-page').classList.add('hidden');
}
// phần chạy menu
function showAuth() { hideAll(); document.getElementById('auth-page').classList.remove('hidden'); }
function showHome() { hideAll(); document.getElementById('home').classList.remove('hidden'); }
function showProfile() { hideAll(); document.getElementById('profile').classList.remove('hidden'); }
// phần đăng kí
function handleRegister() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    if(user && pass) {
        registeredUser = user;
        registeredPass = pass;
        alert("Đăng ký thành công! Bây giờ bạn có thể đăng nhập.");
    } else { alert("Vui lòng điền đủ thông tin đăng ký."); }
}
// phần đăng nhập
function handleLogin() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    if(user === registeredUser && pass === registeredPass && user !== null) {
        showProfile();
    } else { alert("Sai tài khoản hoặc mật khẩu! (Bạn cần đăng ký trước)"); }
}
// phần  lưu hồ sơ
function saveData() {
    alert("Đã lưu hồ sơ thành công!");
    document.getElementById('view-btn').classList.remove('hidden');
}
// chương trình nội dung hồ sơ
function showReview() {
    hideAll();
    const content = `
        <p><b>Họ tên:</b> ${document.getElementById('f-name').value}</p>
        <p><b>Ngành học:</b> ${document.getElementById('f-major').value}</p>
        <p><b>CCCD:</b> ${document.getElementById('f-cccd').value}</p>
        <p><b>Cha:</b> ${document.getElementById('f-dad-name').value} - Nghề nghiệp: ${document.getElementById('f-dad-job').value}</p>
        <p><b>Mẹ:</b> ${document.getElementById('f-mom-name').value} - SĐT: ${document.getElementById('f-mom-phone').value}</p>
    `;
    document.getElementById('review-content').innerHTML = content;
    document.getElementById('review-page').classList.remove('hidden');
}
// phần đăng xuất
function logout() {
    if(confirm("Bạn có chắc muốn đăng xuất?")) showHome();
}