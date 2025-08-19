document.addEventListener("click", function(e) {
    if (e.target.classList.contains("like-btn")) {
        let id = e.target.dataset.id;
        let type = e.target.dataset.type;
        let url = `/api/${type}/${id}/like/`;

        fetch(url, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                e.target.textContent = data.liked ? "Unlike" : "Like";
                let counter = document.getElementById(`likes-count-${type}-${id}`);
                if (counter) {
                    counter.textContent = data.likes_count;
                }
            })
            .catch(err => console.error("Ошибка:", err));
    }
});
