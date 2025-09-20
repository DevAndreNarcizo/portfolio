// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
        const mainNav = document.getElementById('main-nav');
        
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    mainNav.classList.remove('active'); // Fechar menu mobile após clique
                }
            });
        });

        // Formulário de contato
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async function (e) {
                e.preventDefault();

                const formData = {
                    name: document.getElementById('name').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    message: document.getElementById('message').value.trim()
                };

                if (!formData.name || !formData.email || !formData.message) {
                    alert('Por favor, preencha todos os campos.');
                    return;
                }

                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;

                try {
                    // Simulação de envio (substituir por API real)
                    console.log('Dados do formulário:', formData);

                    submitBtn.textContent = 'Mensagem Enviada!';
                    submitBtn.classList.add('btn-success');
                    contactForm.reset();
                } catch (error) {
                    alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
                } finally {
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('btn-success');
                    }, 2000);
                }
            });
        }

        // Animação de scroll
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

        // Observar elementos com animação
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Dark mode toggle (opcional)
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Atualizar cores baseado na preferência do sistema
        function updateTheme() {
            if (prefersDarkScheme.matches) {
                document.documentElement.style.setProperty('--background', '#0a0a0a');
                document.documentElement.style.setProperty('--foreground', '#ededed');
                document.documentElement.style.setProperty('--primary', '#fafafa');
                document.documentElement.style.setProperty('--primary-foreground', '#0a0a0a');
                document.documentElement.style.setProperty('--secondary', '#262626');
                document.documentElement.style.setProperty('--secondary-foreground', '#fafafa');
                document.documentElement.style.setProperty('--muted', '#262626');
                document.documentElement.style.setProperty('--muted-foreground', '#a3a3a3');
                document.documentElement.style.setProperty('--accent', '#262626');
                document.documentElement.style.setProperty('--accent-foreground', '#fafafa');
                document.documentElement.style.setProperty('--border', '#404040');
            }
        }

        // Inicializar tema
        updateTheme();
        
        // Ouvir mudanças de tema
        prefersDarkScheme.addEventListener('change', updateTheme);

        // Adicionar estilo para botão de sucesso
        const style = document.createElement('style');
        style.textContent = `
            .btn-success {
                background-color: #22c55e !important;
                border-color: #22c55e !important;
            }
            
            @media (max-width: 768px) {
                nav.active {
                    display: flex !important;
                }
            }
        `;
        document.head.appendChild(style);