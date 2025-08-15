// Agro-Connect-Hub-Ghana.js
// External JS for Agro Connect Hub Ghana
// ...existing code will be moved here from the HTML file...
// Tailwind config
tailwind.config = {
	theme: {
		extend: {
			colors: {
				primary: '#2E7D32',
				secondary: '#795548'
			},
			borderRadius: {
				'none': '0px',
				'sm': '4px',
				DEFAULT: '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '20px',
				'2xl': '24px',
				'3xl': '32px',
				'full': '9999px',
				'button': '8px'
			}
		}
	}
}
// ...move all other inline scripts from HTML here...
// --- Begin moved scripts from HTML ---
document.addEventListener('DOMContentLoaded', function() {
	// Mobile menu toggle
	const mobileMenuBtn = document.getElementById('mobile-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');
	if (mobileMenuBtn && mobileMenu) {
		mobileMenuBtn.addEventListener('click', function() {
			mobileMenu.classList.toggle('hidden');
		});
	}
	// View toggle
	const gridViewBtn = document.getElementById('grid-view');
	const listViewBtn = document.getElementById('list-view');
	const productGrid = document.getElementById('product-grid');
	if (gridViewBtn && listViewBtn && productGrid) {
		gridViewBtn.addEventListener('click', function() {
			gridViewBtn.classList.add('bg-primary', 'text-white');
			gridViewBtn.classList.remove('text-gray-600');
			listViewBtn.classList.remove('bg-primary', 'text-white');
			listViewBtn.classList.add('text-gray-600');
			productGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
		});
		listViewBtn.addEventListener('click', function() {
			listViewBtn.classList.add('bg-primary', 'text-white');
			listViewBtn.classList.remove('text-gray-600');
			gridViewBtn.classList.remove('bg-primary', 'text-white');
			gridViewBtn.classList.add('text-gray-600');
			productGrid.className = 'grid grid-cols-1 gap-6';
		});
	}
	// Filter controls
	const filterToggle = document.getElementById('filter-toggle');
	const filterSidebar = document.getElementById('filter-sidebar');
	if (filterToggle && filterSidebar) {
		filterToggle.addEventListener('click', function() {
			filterSidebar.classList.toggle('hidden');
		});
	}
	const checkboxes = document.querySelectorAll('.checkbox');
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', function() {
			const isChecked = this.classList.contains('bg-primary');
			if (isChecked) {
				this.classList.remove('bg-primary', 'border-primary');
				this.classList.add('border-gray-300');
				this.querySelector('i').classList.add('hidden');
			} else {
				this.classList.add('bg-primary', 'border-primary');
				this.classList.remove('border-gray-300');
				this.querySelector('i').classList.remove('hidden');
			}
		});
	});
	const radios = document.querySelectorAll('.radio');
	radios.forEach(radio => {
		radio.addEventListener('click', function() {
			radios.forEach(r => {
				r.classList.remove('border-primary');
				r.classList.add('border-gray-300');
				r.querySelector('div').classList.add('hidden');
			});
			this.classList.add('border-primary');
			this.classList.remove('border-gray-300');
			this.querySelector('div').classList.remove('hidden');
		});
	});
	// Slider control
	const slider = document.querySelector('.slider');
	if (slider) {
		const style = document.createElement('style');
		style.textContent = `
			.slider {
				-webkit-appearance: none;
				background: #e5e7eb;
			}
			.slider::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background: #2E7D32;
				cursor: pointer;
			}
			.slider::-moz-range-thumb {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background: #2E7D32;
				cursor: pointer;
				border: none;
			}
		`;
		document.head.appendChild(style);
	}
});
// --- End moved scripts from HTML ---
