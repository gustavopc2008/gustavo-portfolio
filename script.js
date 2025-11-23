// ============================================
// MENU MOBILE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ============================================
// HEADER SCROLL
// ============================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// FILTROS DO PORTFÓLIO
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active no botão clicado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// ============================================
// MODAL DO PORTFÓLIO
// ============================================

const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const portfolioViews = document.querySelectorAll('.portfolio-view');

// Abrir modal ao clicar em "Ver Detalhes"
portfolioViews.forEach((view, index) => {
    view.addEventListener('click', (e) => {
        e.stopPropagation();
        const portfolioItem = view.closest('.portfolio-item');
        const img = portfolioItem.querySelector('img');
        if (img) {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Abrir modal ao clicar diretamente na imagem
portfolioItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Fechar modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Fechar modal ao clicar fora
if (portfolioModal) {
    portfolioModal.addEventListener('click', (e) => {
        if (e.target === portfolioModal) {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portfolioModal.classList.contains('active')) {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
const animateElements = document.querySelectorAll('.servico-card, .portfolio-item, .contato-item, .tecnologia-item');

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL PARA LINKS ÂNCORA
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// VALIDAÇÃO DE FORMULÁRIO (se estiver na página de orçamento)
// ============================================

const orcamentoForm = document.getElementById('orcamentoForm');

if (orcamentoForm) {
    // Máscara para WhatsApp
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = `(${value}`;
                } else if (value.length <= 7) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length <= 11) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                }
                e.target.value = value;
            }
        });
    }
}

// ============================================
// PREVENIR ENVIO DUPLO DO FORMULÁRIO
// ============================================

if (orcamentoForm) {
    let isSubmitting = false;
    
    orcamentoForm.addEventListener('submit', (e) => {
        if (isSubmitting) {
            e.preventDefault();
            return;
        }
        isSubmitting = true;
        
        const submitButton = orcamentoForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
        }
        
        // Reabilitar após 3 segundos (caso haja erro)
        setTimeout(() => {
            isSubmitting = false;
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Orçamento';
            }
        }, 3000);
    });
}

// ============================================
// LAZY LOADING DE IMAGENS (opcional, para performance)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ATUALIZAR ANO NO FOOTER
// ============================================

const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado com sucesso!');
    
    // Adicionar classe de carregamento completa
    document.body.classList.add('loaded');
});

