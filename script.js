(() => {
    const nav = document.getElementById('primaryNav');
    const btn = document.getElementById('navToggle');

    if (!nav || !btn) return;

    function toggleNav(open){
        const isOpen = typeof open === 'boolean' ? open : nav.classList.toggle('open');
        if (typeof open === 'boolean') nav.classList.toggle('open', open);
        const expanded = nav.classList.contains('open');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    btn.addEventListener('click', () => toggleNav());

    // close on Escape
    document.addEventListener('keydown', (e) =>{
        if (e.key === 'Escape' && nav.classList.contains('open')) toggleNav(false);
    });

    // close when clicking outside on small screens
    document.addEventListener('click', (e) => {
        if (!nav.classList.contains('open')) return;
        if (e.target === btn || nav.contains(e.target)) return;
        toggleNav(false);
    });
})();