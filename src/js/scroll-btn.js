document.addEventListener('DOMContentLoaded', () => {
  const scrollToHeaderBtn = document.getElementById('scroll-to-header-btn');
  const header = document.querySelector('.header');
  const showButtonOffset = window.innerHeight; // 100vh

  const handleScroll = () => {
    if (window.scrollY > showButtonOffset) {
      scrollToHeaderBtn.classList.add('show');
    } else {
      scrollToHeaderBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll);

  scrollToHeaderBtn.addEventListener('click', () => {
    header.scrollIntoView({ behavior: 'smooth' });
  });
});
