<script setup lang="ts">
import { computed } from "vue";
import Banner from "../../../components/Banner.vue";
import Link from "../../../components/Link.vue";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";

type BlogEntry = {
  title: string;
  excerpt: string;
  tag: string;
  href?: string;
};

const posts = computed<BlogEntry[]>(() => {
  if (locale.value === "es") {
    return [
      {
        title: "Notas de Cursos en Publico",
        excerpt: "Aprendizajes clave de cursos actuales sobre desarrollo moderno, IA y automatizacion.",
        tag: "Cursos",
      },
      {
        title: "Bitacora de Proyectos Reales",
        excerpt: "Decisiones reales, tradeoffs y detalles tecnicos mientras construyo proyectos en produccion.",
        tag: "Proyectos",
      },
      {
        title: "Automatizacion con n8n y Make",
        excerpt: "Flujos practicos para ahorrar tiempo en ventas, operaciones y atencion al cliente.",
        tag: "Automatizacion",
      },
      {
        title: "Leer en Web Artisan",
        excerpt: "Visita el blog actual mientras esta nueva experiencia de portafolio sigue creciendo.",
        tag: "Live",
        href: "https://www.webartisan.com.mx/blog",
      },
    ];
  }

  return [
    {
      title: "Course Notes in Public",
      excerpt: "Key lessons from ongoing courses in modern development, AI, and automation.",
      tag: "Courses",
    },
    {
      title: "Build Logs: Real Projects",
      excerpt: "Real decisions, tradeoffs, and lessons learned while shipping production projects.",
      tag: "Projects",
    },
    {
      title: "Automation with n8n and Make",
      excerpt: "Practical workflows to save time across sales, operations, and customer support.",
      tag: "Automation",
    },
    {
      title: "Read on Web Artisan",
      excerpt: "Visit the current blog while this new portfolio experience is being expanded.",
      tag: "Live",
      href: "https://www.webartisan.com.mx/blog",
    },
  ];
});
</script>

<template>
  <section class="blog" id="blog">
    <div class="grid">
      <div class="blog-title">
        <Banner class="blog-title-banner" :copy="t('new')" size="sm" animated />
        <h2 class="blog-title-copy">{{ t("blog") }}</h2>
        <p class="blog-title-description">{{ t("blog-intro") }}</p>
      </div>
    </div>

    <div class="grid">
      <div class="blog-list">
        <article v-for="post in posts" :key="post.title" class="blog-card">
          <p class="blog-card-tag">{{ post.tag }}</p>
          <h3 class="blog-card-title">{{ post.title }}</h3>
          <p class="blog-card-excerpt">{{ post.excerpt }}</p>
          <Link
            v-if="post.href"
            class="blog-card-link"
            :href="post.href"
            external
            data-cursor="circle-white"
            data-hoversound="hover"
          >
            {{ t("live-view") }}
          </Link>
          <p v-else class="blog-card-coming">{{ t("coming-soon") }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
  width: 100%;
  padding: 104px var(--space-outer);
  background-color: var(--color-beige-600);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @include mixins.mq("md") {
    gap: var(--space-xxl);
    padding-top: 136px;
    padding-bottom: 136px;
  }

  &-title {
    position: relative;
    grid-column: 1 / 13;
    max-width: 760px;
    padding-top: var(--space-md);

    @include mixins.mq("lg") {
      grid-column: 3 / 9;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-description {
      margin-top: var(--space-sm);
      font-size: var(--font-size-lg);
      color: var(--color-text-300);
      max-width: 68ch;
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-list {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-card {
    background: var(--color-beige-400);
    border: var(--stroke-sm) solid var(--color-beige-700);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-tag {
      width: fit-content;
      font-size: var(--font-size-sm);
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: var(--color-orange-600);
      background: var(--color-orange-100);
      border-radius: var(--radius-sm);
      padding: 4px 10px;
    }

    &-title {
      font-size: var(--font-size-title-xs);
      font-weight: 800;
      line-height: 1.3;
    }

    &-excerpt {
      color: var(--color-text-300);
      line-height: 1.6;
      flex: 1;
    }

    &-link {
      font-weight: 800;
      color: var(--color-text-400);
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    &-coming {
      color: var(--color-text-200);
      font-weight: 700;
      font-size: var(--font-size-sm);
    }
  }
}
</style>
