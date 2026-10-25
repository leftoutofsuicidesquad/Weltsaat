// =============================
//  Weltsaat e.V. – News-Archiv
//  Paginierte Liste aller Nachrichten
// =============================

document.addEventListener('DOMContentLoaded', function() {
  initNewsArchive();
});

/**
 * News-Archiv initialisieren
 * Zeigt alle Nachrichten paginiert an
 */
function initNewsArchive() {
  const newsList = document.getElementById('news-list');
  const pagination = document.getElementById('news-pagination');

  // Nur initialisieren, wenn die News-Liste auf der Seite existiert
  if (!newsList) {
    return;
  }

  const articles = newsList.querySelectorAll('.news-article');
  const articlesPerPage = 3;
  let currentPage = 1;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // articles auf Seite 1 anzeigen
  function showPage(page) {
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    articles.forEach(function(article, index) {
      if (index >= start && index < end) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });

    currentPage = page;
    updatePagination();
  }

  // Paginierungsknöpfe erstellen
  function updatePagination() {
    if (!pagination) return;

    pagination.innerHTML = '';

    // Vorherige Seite
    const prevLi = document.createElement('li');
    const prevBtn = document.createElement('a');
    prevBtn.href = '#';
    prevBtn.textContent = '← Vorherige';
    prevBtn.className = 'news-page-link';
    if (currentPage === 1) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(currentPage - 1);
      });
    }
    prevLi.appendChild(prevBtn);
    pagination.appendChild(prevLi);

    // Seitennummern
    for (let i = 1; i <= totalPages; i++) {
      const pageLi = document.createElement('li');
      const pageBtn = document.createElement('a');
      pageBtn.href = '#';
      pageBtn.textContent = i;
      pageBtn.className = 'news-page-link';

      if (i === currentPage) {
        pageBtn.classList.add('active');
      } else {
        pageBtn.addEventListener('click', function(e) {
          e.preventDefault();
          showPage(i);
        });
      }

      pageLi.appendChild(pageBtn);
      pagination.appendChild(pageLi);
    }

    // Nächste Seite
    const nextLi = document.createElement('li');
    const nextBtn = document.createElement('a');
    nextBtn.href = '#';
    nextBtn.textContent = 'Nächste →';
    nextBtn.className = 'news-page-link';
    if (currentPage === totalPages) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(currentPage + 1);
      });
    }
    nextLi.appendChild(nextBtn);
    pagination.appendChild(nextLi);
  }

  // Erste Seite anzeigen
  showPage(1);
}