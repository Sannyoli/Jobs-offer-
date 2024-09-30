document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can process the data here
    document.getElementById('message').innerText = `ধন্যবাদ, ${name}! আপনার উপহারটি আপনার ইমেইলে পাঠানো হবে: ${email}`;
});
