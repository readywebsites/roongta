// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  // Reveal Animation Observer
  const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Hero slider
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Sky Vista Apartments",
      location: "Adajan, Surat",
      type: "residential",
      status: "completed",
      description: "Luxury 3 & 4 BHK apartments with panoramic city views",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: {
        bedrooms: "3 & 4 BHK",
        area: "1800 - 2800 sq.ft.",
        possession: "Ready to Move",
      },
    },
    {
      id: 2,
      title: "Green Valley Residency",
      location: "Vesu, Surat",
      type: "residential",
      status: "ongoing",
      description: "Eco-friendly residential complex with ample green spaces",
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      features: {
        bedrooms: "2, 3 & 4 BHK",
        area: "1200 - 2400 sq.ft.",
        possession: "Dec 2024",
      },
    },
    {
      id: 3,
      title: "Roongta Business Park",
      location: "Ring Road, Surat",
      type: "commercial",
      status: "completed",
      description: "Premium commercial space for offices and retail",
      image:
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      features: {
        units: "Office & Retail",
        area: "800 - 5000 sq.ft.",
        possession: "Ready to Move",
      },
    },
    {
      id: 4,
      title: "Luxury Villas Adajan",
      location: "Adajan, Surat",
      type: "residential",
      status: "upcoming",
      description:
        "Exclusive villas with private gardens and premium amenities",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
      features: {
        bedrooms: "4 & 5 BHK",
        area: "3500 - 5000 sq.ft.",
        possession: "Launching Soon",
      },
    },
    {
      id: 5,
      title: "City Center Mall",
      location: "City Light, Surat",
      type: "commercial",
      status: "ongoing",
      description: "Modern shopping mall with multiplex and food court",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: {
        units: "Retail & Entertainment",
        area: "Various Sizes",
        possession: "Oct 2024",
      },
    },
    {
      id: 6,
      title: "Riverfront Apartments",
      location: "Athwa, Surat",
      type: "residential",
      status: "upcoming",
      description: "Luxury apartments with Tapi river views",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: {
        bedrooms: "3 & 4 BHK",
        area: "2000 - 3200 sq.ft.",
        possession: "Launching Soon",
      },
    },
    {
      id: 7,
      title: "Sunrise Heights",
      location: "Vesu, Surat",
      type: "residential",
      status: "upcoming",
      description:
        "Modern high-rise apartments with premium lifestyle amenities",
      image:
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1084&q=80",
      features: {
        bedrooms: "2 & 3 BHK",
        area: "1100 - 1600 sq.ft.",
        possession: "2026",
      },
    },
    {
      id: 8,
      title: "Tech Hub",
      location: "Piplod, Surat",
      type: "commercial",
      status: "ongoing",
      description: "Next-gen IT park with smart office infrastructure",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      features: {
        units: "IT Offices",
        area: "1000 - 10000 sq.ft.",
        possession: "2025",
      },
    },
    {
      id: 9,
      title: "Riverside Villas",
      location: "Amroli, Surat",
      type: "residential",
      status: "completed",
      description: "Serene riverside living with private access to promenade",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
      features: {
        bedrooms: "3 BHK Villas",
        area: "2200 sq.ft.",
        possession: "Ready to Move",
      },
    },
  ];

  // Render projects
  const projectGrid = document.querySelector(".project-grid");
  const searchInput = document.getElementById("projectSearch");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let currentFilter = "all";
  let visibleCount = 3;

  function renderProjects() {
    projectGrid.innerHTML = "";
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";

    let filteredProjects = projects;

    // Filter by category
    if (currentFilter !== "all") {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.type === currentFilter || project.status === currentFilter
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm) ||
          project.location.toLowerCase().includes(searchTerm)
      );
    }

    // Handle Load More button visibility
    if (loadMoreBtn) {
      if (filteredProjects.length > visibleCount) {
        loadMoreBtn.style.display = "inline-block";
      } else {
        loadMoreBtn.style.display = "none";
      }
    }

    if (filteredProjects.length === 0) {
      projectGrid.innerHTML =
        '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);"><h3>No projects found matching your criteria.</h3></div>';
      return;
    }

    filteredProjects.slice(0, visibleCount).forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card reveal-up";

      let statusClass = "";
      if (project.status === "completed") statusClass = "status-completed";
      if (project.status === "ongoing") statusClass = "status-ongoing";
      if (project.status === "upcoming") statusClass = "status-upcoming";

      projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay-badges">
                        <span class="project-status ${statusClass}">${
        project.status.charAt(0).toUpperCase() + project.status.slice(1)
      }</span>
                        <span class="project-type-badge">${
                          project.type.charAt(0).toUpperCase() +
                          project.type.slice(1)
                        }</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <div class="project-location">
                        <i class="fas fa-map-marker-alt" style="color: var(--accent-color);"></i> ${
                          project.location
                        }
                    </div>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-features">
                        <div class="feature-item">
                            ${
                              project.type === "residential"
                                ? '<i class="fas fa-bed"></i>'
                                : '<i class="fas fa-building"></i>'
                            }
                            <span>${
                              project.type === "residential"
                                ? project.features.bedrooms.split(" ")[0]
                                : project.features.units.split(" ")[0]
                            }</span>
                            <small>${
                              project.type === "residential" ? "BHK" : "Type"
                            }</small>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${project.features.area.split(" ")[0]}</span>
                            <small>Sq. Ft.</small>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${
                              project.features.possession === "Ready to Move"
                                ? "Ready"
                                : project.features.possession.split(" ")[0]
                            }</span>
                            <small>${
                              project.features.possession === "Ready to Move"
                                ? "To Move"
                                : project.features.possession.split(" ")[1] ||
                                  "Possession"
                            }</small>
                        </div>
                    </div>
                    <div class="project-buttons">
                        <button class="quick-view-btn" onclick="openProjectModal(${
                          project.id
                        })">
                            <i class="fas fa-eye"></i> Quick View
                        </button>
                        <a href="#contact" class="btn-primary">Enquire <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;

      projectGrid.appendChild(projectCard);
      revealObserver.observe(projectCard);
    });
  }

  // Initial render
  renderProjects();

  // Load More button event listener
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      visibleCount += 3;
      renderProjects();
    });
  }

  // Project filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Update filter value
      currentFilter = this.getAttribute("data-filter");
      visibleCount = 3; // Reset visible count on filter change

      // Render filtered projects
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      visibleCount = 3; // Reset visible count on search
      renderProjects();
    });
  }

  // Testimonial slider
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Show selected testimonial
    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
    currentTestimonial = index;
  }

  // Next testimonial
  nextBtn.addEventListener("click", function () {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    showTestimonial(nextIndex);
  });

  // Previous testimonial
  prevBtn.addEventListener("click", function () {
    let prevIndex = currentTestimonial - 1;
    if (prevIndex < 0) prevIndex = testimonials.length - 1;
    showTestimonial(prevIndex);
  });

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      showTestimonial(index);
    });
  });

  // Auto rotate testimonials
  let testimonialInterval;

  function startTestimonialRotation() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
      let nextIndex = currentTestimonial + 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      showTestimonial(nextIndex);
    }, 6000);
  }

  startTestimonialRotation();

  const testimonialSlider = document.querySelector(".testimonials-slider");
  if (testimonialSlider) {
    testimonialSlider.addEventListener("mouseenter", () =>
      clearInterval(testimonialInterval)
    );
    testimonialSlider.addEventListener("mouseleave", startTestimonialRotation);
  }

  // Form submission
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(
      `Thank you ${name}! We have received your inquiry and will contact you at ${email} shortly.`
    );

    // Reset form
    this.reset();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (typeof lenis !== 'undefined') {
          lenis.scrollTo(targetElement, { offset: -80 });
        } else {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Newsletter form
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email) {
      alert(
        `Thank you for subscribing to our newsletter! Updates will be sent to ${email}.`
      );
      emailInput.value = "";
    }
  });

  // EMI Calculator Logic
  const loanAmount = document.getElementById("loan-amount");
  const interestRate = document.getElementById("interest-rate");
  const loanTenure = document.getElementById("loan-tenure");

  const amountDisplay = document.getElementById("amount-display");
  const rateDisplay = document.getElementById("rate-display");
  const tenureDisplay = document.getElementById("tenure-display");

  const monthlyEMI = document.getElementById("monthly-emi");
  const principalDisplay = document.getElementById("principal-amount");
  const totalInterest = document.getElementById("total-interest");
  const totalPayable = document.getElementById("total-payable");

  function formatCurrency(num) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  }

  function calculateEMI() {
    const P = parseFloat(loanAmount.value);
    const r = parseFloat(interestRate.value) / 12 / 100;
    const n = parseFloat(loanTenure.value) * 12;

    // Update displays
    amountDisplay.textContent = formatCurrency(P);
    rateDisplay.textContent = interestRate.value + "%";
    tenureDisplay.textContent = loanTenure.value + " Years";

    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const interest = totalPayment - P;

    monthlyEMI.textContent = formatCurrency(emi);
    principalDisplay.textContent = formatCurrency(P);
    totalInterest.textContent = formatCurrency(interest);
    totalPayable.textContent = formatCurrency(totalPayment);
  }

  // Add event listeners
  if (loanAmount) {
    loanAmount.addEventListener("input", calculateEMI);
    interestRate.addEventListener("input", calculateEMI);
    loanTenure.addEventListener("input", calculateEMI);
    // Initial calculation
    calculateEMI();
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) otherItem.classList.remove("active");
      });
      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Hero Stats Counter Animation
  const statsSection = document.querySelector(".hero-stats");
  const statNumbers = document.querySelectorAll(".stat-item h3");
  let statsAnimated = false;

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNumbers.forEach((stat) => {
              const target = parseInt(stat.innerText);
              const suffix = stat.innerText.replace(/[0-9]/g, "");
              const duration = 2000; // 2 seconds
              const start = performance.now();

              function step(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out quart for smooth deceleration
                const ease = 1 - Math.pow(1 - progress, 4);

                const current = Math.floor(ease * target);
                stat.innerText = current + suffix;

                if (progress < 1) {
                  requestAnimationFrame(step);
                } else {
                  stat.innerText = target + suffix;
                }
              }

              requestAnimationFrame(step);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsSection);
  }

  // Gallery Section Logic
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Modern Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Spacious Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Luxury Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Elegant Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Grand Entrance",
    },
    {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Swimming Pool",
    },
  ];

  // Add more images for the ticker effect
  const moreImages = [
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Outdoor Patio",
    },
    {
      src: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Master Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Home Office",
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      caption: "Dining Area",
    },
  ];

  const allGalleryImages = [...galleryImages, ...moreImages];

  const track1 = document.getElementById("gallery-track-1");
  const track2 = document.getElementById("gallery-track-2");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close-lightbox");

  function createGalleryItem(img) {
    const item = document.createElement("div");
    item.className = "gallery-item-ticker";
    item.innerHTML = `
        <img src="${img.src}" alt="${img.caption}">
        <div class="gallery-overlay-ticker">
          <i class="fas fa-search-plus"></i>
        </div>
      `;
    item.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      captionText.innerHTML = img.caption;
    });
    return item;
  }

  if (track1 && track2) {
    // Populate Track 1 (First half + duplicate for loop)
    const track1Images = [...allGalleryImages, ...allGalleryImages]; // Duplicate for seamless loop
    track1Images.forEach((img) => {
      track1.appendChild(createGalleryItem(img));
    });

    // Populate Track 2 (Reverse order + duplicate for loop)
    const track2Images = [...allGalleryImages].reverse();
    const track2Loop = [...track2Images, ...track2Images]; // Duplicate for seamless loop
    track2Loop.forEach((img) => {
      track2.appendChild(createGalleryItem(img));
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Blog Section Logic
  const blogPosts = [
    {
      title: "Top 5 Emerging Real Estate Locations in Surat",
      date: "Oct 15, 2023",
      category: "Market Trends",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1296&q=80",
      excerpt:
        "Discover the neighborhoods that are poised for significant growth and appreciation in the coming years.",
    },
    {
      title: "A Guide to Home Loan Interest Rates in 2024",
      date: "Sep 28, 2023",
      category: "Finance",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1311&q=80",
      excerpt:
        "Everything you need to know about current mortgage rates and how to secure the best deal for your dream home.",
    },
    {
      title: "Interior Design Trends for Modern Apartments",
      date: "Sep 10, 2023",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80",
      excerpt:
        "Transform your living space with these contemporary design ideas that blend functionality with aesthetics.",
    },
    {
      title: "Investing in Commercial Real Estate: Pros & Cons",
      date: "Aug 22, 2023",
      category: "Investment",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      excerpt:
        "A comprehensive guide to understanding the returns and risks associated with commercial property investments.",
    },
    {
      title: "Sustainable Living: Green Homes Explained",
      date: "Aug 05, 2023",
      category: "Eco Living",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80",
      excerpt:
        "How eco-friendly construction and amenities are shaping the future of residential living in India.",
    },
    {
      title: "The Checklist for First-Time Home Buyers",
      date: "Jul 18, 2023",
      category: "Guide",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
      excerpt:
        "Don't miss these crucial steps when planning to buy your first dream home.",
    },
  ];

  const blogTrack = document.querySelector(".blog-track");

  if (blogTrack) {
    // Duplicate posts for infinite ticker effect
    const allBlogPosts = [...blogPosts, ...blogPosts];

    // Render Blog Posts
    allBlogPosts.forEach((post) => {
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card"; // Removed reveal-up to avoid animation issues inside slider
      blogCard.innerHTML = `
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}">
          <span class="blog-date">${post.date}</span>
        </div>
        <div class="blog-content">
          <span class="blog-category">${post.category}</span>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      `;
      blogTrack.appendChild(blogCard);
    });
  }

  // Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
      } else {
        backToTopBtn.classList.remove("active");
      }
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Timeline Data & Logic
  const timelineData = [
    {
      year: 2025,
      achievements: [
        {
          title: "Roongta Tech Park Launch",
          description:
            "Unveiled state-of-the-art technology park with 500+ office spaces.",
          type: "innovation",
          icon: "💡",
        },
        {
          title: "15,000+ Happy Families",
          description:
            "Celebrated welcoming 15,000 families to their dream homes.",
          type: "growth",
          icon: "👥",
        },
      ],
    },
    {
      year: 2023,
      achievements: [
        {
          title: "Green Valley Completion",
          description:
            "Successfully delivered the eco-friendly residential complex ahead of schedule.",
          type: "milestone",
          icon: "🏗️",
        },
        {
          title: "Best Developer Award",
          description:
            "Recognized as 'Best Sustainable Developer' by Gujarat Real Estate Awards.",
          type: "award",
          icon: "🏆",
        },
      ],
    },
    {
      year: 2020,
      achievements: [
        {
          title: "Digital Transformation",
          description:
            "Launched complete virtual tour and online booking platform during pandemic.",
          type: "innovation",
          icon: "💻",
        },
      ],
    },
    {
      year: 2015,
      achievements: [
        {
          title: "Expansion to Commercial",
          description:
            "Started first major commercial project 'Roongta Business Hub'.",
          type: "growth",
          icon: "🏢",
        },
      ],
    },
    {
      year: 2010,
      achievements: [
        {
          title: "100th Project",
          description: "Completed the 100th residential project in Surat.",
          type: "milestone",
          icon: "💯",
        },
      ],
    },
    {
      year: 2005,
      achievements: [
        {
          title: "ISO Certification",
          description:
            "Achieved ISO 9001:2000 certification for quality management.",
          type: "award",
          icon: "📜",
        },
      ],
    },
    {
      year: 1998,
      achievements: [
        {
          title: "Inception",
          description:
            "Roongta Developers founded with a vision to transform Surat's skyline.",
          type: "milestone",
          icon: "🚀",
        },
      ],
    },
  ];

  function initializeTimeline() {
    const timelineYears = document.querySelector(".timeline-years");
    const timelineMobileYears = document.querySelector(
      ".timeline-mobile-years"
    );
    const timelineContent = document.querySelector(".timeline-achievements");
    const timelineYearTitle = document.querySelector(".timeline-year-title");
    const timelineMobileDisplay = document.querySelector(
      ".timeline-mobile-year-display"
    );
    const timelineMobileContent = document.querySelector(
      ".timeline-mobile-achievements"
    );
    const prevBtn = document.querySelector(".timeline-nav-btn.prev");
    const nextBtn = document.querySelector(".timeline-nav-btn.next");

    if (!timelineYears || !timelineContent) return;

    let currentYearIndex = 0;

    // Render Years (Desktop & Mobile)
    timelineData.forEach((item, index) => {
      // Desktop
      const btn = document.createElement("button");
      btn.className = `timeline-year-btn ${index === 0 ? "active" : ""}`;
      btn.innerHTML = `${item.year} <span class="timeline-year-badge">${
        index === 0 ? "Latest" : ""
      }</span>`;
      btn.addEventListener("click", () => selectYear(index));
      timelineYears.appendChild(btn);

      // Mobile
      const mBtn = document.createElement("button");
      mBtn.className = `timeline-mobile-year-btn ${
        index === 0 ? "active" : ""
      }`;
      mBtn.textContent = item.year;
      mBtn.addEventListener("click", () => selectYear(index));
      timelineMobileYears.appendChild(mBtn);
    });

    function selectYear(index) {
      currentYearIndex = index;
      document
        .querySelectorAll(".timeline-year-btn")
        .forEach((btn, i) => btn.classList.toggle("active", i === index));
      document
        .querySelectorAll(".timeline-mobile-year-btn")
        .forEach((btn, i) => btn.classList.toggle("active", i === index));

      const data = timelineData[index];
      timelineYearTitle.textContent = data.year;
      timelineMobileDisplay.innerHTML = `<h3>${data.year}</h3>`;

      const renderAch = (container) => {
        container.innerHTML = "";
        data.achievements.forEach((ach, i) => {
          const item = document.createElement("div");
          item.className = "achievement-item";
          item.style.animationDelay = `${i * 0.1}s`;
          item.innerHTML = `<div class="achievement-header"><span class="achievement-icon">${ach.icon}</span><h4 class="achievement-title">${ach.title}</h4><span class="achievement-tag">${ach.type}</span></div><p class="achievement-description">${ach.description}</p>`;
          container.appendChild(item);
        });
      };
      renderAch(timelineContent);
      renderAch(timelineMobileContent);
    }

    if (prevBtn)
      prevBtn.addEventListener(
        "click",
        () => currentYearIndex > 0 && selectYear(currentYearIndex - 1)
      );
    if (nextBtn)
      nextBtn.addEventListener(
        "click",
        () =>
          currentYearIndex < timelineData.length - 1 &&
          selectYear(currentYearIndex + 1)
      );
    selectYear(0);
  }

  initializeTimeline();

  // Initial observation for static elements
  const staticReveals = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
  );
  staticReveals.forEach((el) => revealObserver.observe(el));

  // Project Quick View Modal Logic
  const projectModal = document.getElementById("project-modal");
  const projectModalBody = document.getElementById("project-modal-body");
  const closeProjectModal = document.querySelector(".close-modal");

  // Function to open modal (exposed to window for inline onclick)
  window.openProjectModal = function (projectId) {
    const project = projects.find((p) => p.id === parseInt(projectId));
    if (!project) return;

    let statusClass = "";
    if (project.status === "completed") statusClass = "status-completed";
    if (project.status === "ongoing") statusClass = "status-ongoing";
    if (project.status === "upcoming") statusClass = "status-upcoming";

    const featuresHtml = `
      <div class="modal-feature-item">
        ${
          project.type === "residential"
            ? '<i class="fas fa-bed"></i>'
            : '<i class="fas fa-building"></i>'
        }
        <div>
          <strong>${
            project.type === "residential" ? "Configuration" : "Units"
          }</strong>
          <span>${
            project.type === "residential"
              ? project.features.bedrooms
              : project.features.units
          }</span>
        </div>
      </div>
      <div class="modal-feature-item">
        <i class="fas fa-ruler-combined"></i>
        <div>
          <strong>Area Size</strong>
          <span>${project.features.area}</span>
        </div>
      </div>
      <div class="modal-feature-item">
        <i class="fas fa-calendar-alt"></i>
        <div>
          <strong>Possession</strong>
          <span>${project.features.possession}</span>
        </div>
      </div>
      <div class="modal-feature-item">
        <i class="fas fa-tag"></i>
        <div>
          <strong>Status</strong>
          <span>${
            project.status.charAt(0).toUpperCase() + project.status.slice(1)
          }</span>
        </div>
      </div>
    `;

    projectModalBody.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="modal-details">
          <div class="modal-tags">
            <span class="project-status ${statusClass}">${
      project.status.charAt(0).toUpperCase() + project.status.slice(1)
    }</span>
            <span class="project-type-badge">${
              project.type.charAt(0).toUpperCase() + project.type.slice(1)
            }</span>
          </div>
          <h3>${project.title}</h3>
          <div class="modal-location">
            <i class="fas fa-map-marker-alt"></i> ${project.location}
          </div>
          <p class="modal-description">${
            project.description
          }. This premium development offers state-of-the-art amenities, strategic location advantages, and superior construction quality that Roongta Developers is known for.</p>
          
          <div class="modal-features">
            ${featuresHtml}
          </div>
          
          <div style="display: flex; gap: 15px;">
            <a href="#contact" class="btn-primary" onclick="document.getElementById('project-modal').classList.remove('active'); document.body.style.overflow = '';">Enquire Now</a>
          </div>
        </div>
      </div>
    `;

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  // Close modal logic
  if (closeProjectModal) {
    closeProjectModal.addEventListener("click", () => {
      projectModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});
