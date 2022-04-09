
import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
// import imageUrlBuilder from "@sanity/image-url";
// import { Actor } from '../actor';
// import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "q09i5c0h",
      dataset: "production",
      apiVersion: '2022-02-01',
      useCdn: false
    })
  }

  urlFor = (source: any) =>
    ImageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getProjects() {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "project"]{
        title,
        slug,
        mainImage,
        projectType,
        images,
        href
  }`
    );
  }

  async getOneProject(slug) {
    return await this.sanityClientCredentials.option.fetch(
      `*[slug.current == "${slug}"]{
        title,
        slug,
        mainImage,
        projectType,
        images,
        href
  }`
    );
  }
  async getActors(): Promise<any> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "person"]{
        _id,
    name,
    image
  }`
    );
  }
}