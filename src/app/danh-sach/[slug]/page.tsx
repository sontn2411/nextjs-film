import React from 'react'
import ContentSlug from './Content'

const SubSlug = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  return <ContentSlug slug={slug} />
}

export default SubSlug
