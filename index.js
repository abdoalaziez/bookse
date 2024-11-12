document.getElementById('bookmark-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('bookmark-title').value;
    const url = document.getElementById('bookmark-url').value;

    addBookmark(title, url);
    document.getElementById('bookmark-form').reset();
});
   function addBookmark(title, url) {
    const bookmarkList = document.getElementById('bookmark-list');

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${title}</h2>
        <i class="fa fa-external-link" aria-hidden="true"></i>   <a href="${url}" target="_blank">${url}</a>
        <div class="button-group">
            <button class="edit-btn" onclick="editBookmark(this)">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
            <button class="delete-btn" onclick="deleteBookmark(this)">
            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
        </div>
    `;
    bookmarkList.appendChild(card);
}

function deleteBookmark(button) {
    const card = button.closest('.card');
    card.remove();
}

function editBookmark(button) {
    const card = button.closest('.card');
    const title = card.querySelector('h2').textContent;
    const url = card.querySelector('a').href;

    const newTitle = prompt("Edit Bookmark:", title);
    const newUrl = prompt("Edit Bookmark URL:", url);

if(newTitle && newUrl) {
        card.querySelector('h2').textContent = newTitle;
        card.querySelector('a').href = newUrl;
        card.querySelector('a').textContent = newUrl;
    }
}
