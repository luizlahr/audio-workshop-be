// import { UpdateBrandInput } from '@application/inputs/brand/update-brand.input';
// import { DeleteBrand } from '@domain/brand/actions/delete-brand.action';
// import { UpdateBrand } from '@domain/brand/actions/update-brand.action';
import { CreateBrandInput } from '@application/inputs/equipments/create-brand.input';
import { Brand } from '@application/models/brand.model';
import { CreateBrand } from '@domain/equipment/actions/create-brand.action';
import { ListBrands } from '@domain/equipment/actions/list-brands.action';
import { ReadBrand } from '@domain/equipment/actions/read-brand.action';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Brand)
export class BrandResolver {
  constructor(
    private listBrands: ListBrands,
    private readBrand: ReadBrand,
    private createBrand: CreateBrand, // private updateBrand: UpdateBrand, // private deleteBrand: DeleteBrand,
  ) {}

  @Query(() => [Brand], { name: 'brands' })
  list() {
    return this.listBrands.handle();
  }

  @Query(() => Brand, { name: 'brand' })
  async read(@Args('brandId') brandId: string) {
    return this.readBrand.handle(brandId);
  }

  @Mutation(() => Brand, { name: 'createBrand' })
  create(@Args('data') data: CreateBrandInput) {
    return this.createBrand.handle(data);
  }

  // @Mutation(() => Brand, { name: 'updateBrand' })
  // update(
  //   @Args('brandId', { type: () => String }) brandId: string,
  //   @Args('data') data: UpdateBrandInput,
  // ) {
  //   return this.updateBrand.handle(brandId, data);
  // }

  // @Mutation(() => String, { name: 'deleteBrand', nullable: true })
  // delete(@Args('brandId') brandId: string): Promise<void> {
  //   return this.deleteBrand.handle(brandId);
  // }
}
