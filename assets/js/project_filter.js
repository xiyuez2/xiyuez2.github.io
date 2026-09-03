// Click-to-filter for the project / experience cards rendered by
// _includes/widgets/project_grid.html. Clicking a tag (in the filter bar or on
// a card) shows only the cards carrying that tag; clicking the active tag again,
// or "All", clears the filter. The active tag is mirrored into the URL hash
// (#tag=<slug>) so a filtered view can be linked to.
$(function () {
    var $filter = $('#project-filter');
    if ($filter.length === 0) {
        return;
    }

    var $cards = $('.project-card');
    var $groups = $('.project-group');
    var $tags = $('.project-tag');
    var activeTag = '';

    function cardHasTag(card, slug) {
        var slugs = (card.getAttribute('data-tags') || '').split(/\s+/);
        return slugs.indexOf(slug) !== -1;
    }

    function knownTag(slug) {
        return $filter.find('.project-tag[data-tag="' + slug + '"]').length > 0;
    }

    function applyFilter(slug) {
        if (slug && !knownTag(slug)) {
            slug = '';
        }
        activeTag = slug;

        $cards.each(function () {
            $(this).toggle(!slug || cardHasTag(this, slug));
        });
        // Hide a group heading when none of its cards survive the filter. Test the tags rather
        // than :visible, which is always false inside a group that is currently hidden.
        $groups.each(function () {
            var survivors = $(this).find('.project-card').filter(function () {
                return !slug || cardHasTag(this, slug);
            });
            $(this).toggle(survivors.length > 0);
        });
        $tags.each(function () {
            var isActive = ($(this).attr('data-tag') || '') === slug;
            $(this).toggleClass('active badge-dark', isActive).toggleClass('badge-light', !isActive);
        });

        // Masonry (initialised in common.js) positions items absolutely, so re-layout
        // the grids that are still visible.
        $('.grid:visible').masonry('layout');

        if (window.history && history.replaceState) {
            history.replaceState(null, '', location.pathname + location.search + (slug ? '#tag=' + slug : ''));
        }
    }

    function tagFromHash() {
        var match = /[#&]tag=([^&]+)/.exec(location.hash);
        return match ? decodeURIComponent(match[1]) : '';
    }

    $(document).on('click', '.project-tag', function (event) {
        event.preventDefault();
        var slug = $(this).attr('data-tag') || '';
        applyFilter(slug === activeTag ? '' : slug);
        // A click on a card badge may have hidden the cards above it; keep the filter bar in view.
        if (!$.contains($filter[0], this)) {
            $filter[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    $(window).on('hashchange', function () {
        applyFilter(tagFromHash());
    });

    applyFilter(tagFromHash());
});
