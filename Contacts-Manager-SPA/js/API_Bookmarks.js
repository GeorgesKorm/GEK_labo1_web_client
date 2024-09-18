const API_URL = "https://foggy-peach-radium.glitch.me/api/bookmarks";
//const API_URL = "http://localhost:5000/api/bookmarks";

function API_GetBookmarks() {
  return new Promise((resolve) => {
    $.ajax({
      url: API_URL,
      success: (bookmarks) => {
        resolve(bookmarks);
      },
      error: (xhr) => {
        console.log(xhr);
        resolve(null);
      },
    });
  });
}
function API_GetBookmark(bookmarkId) {
  return new Promise((resolve) => {
    $.ajax({
      url: API_URL + "/" + bookmarkId,
      success: (bookmark) => {
        resolve(bookmark);
      },
      error: () => {
        resolve(null);
      },
    });
  });
}
function API_GetFilteredBookmarks(category) {
  return new Promise((resolve) => {
    $.ajax({
      url: API_URL + "/" + category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(' ', ''),
      success: (bookmark) => {
        resolve(bookmark);
      },
      error: () => {
        resolve(null);
      },
    });
  });
}
function API_SaveBookmark(bookmark, create) {
  return new Promise((resolve) => {
    $.ajax({
      url: API_URL + (create ? "" : "/" + bookmark.Id),
      type: create ? "POST" : "PUT",
      contentType: "application/json",
      data: JSON.stringify(bookmark),
      success: (/*data*/) => {
        resolve(true);
      },
      error: (/*xhr*/) => {
        resolve(false /*xhr.status*/);
      },
    });
  });
}
function API_DeleteBookmark(id) {
  return new Promise((resolve) => {
    $.ajax({
      url: API_URL + "/" + id,
      type: "DELETE",
      success: () => {
        resolve(true);
      },
      error: (/*xhr*/) => {
        resolve(false /*xhr.status*/);
      },
    });
  });
}