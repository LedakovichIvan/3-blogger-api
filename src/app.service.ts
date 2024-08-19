import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';
import { Post } from './post/post.entity';

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		@InjectRepository(Post) private readonly postRepository: Repository<Post>
	) {}
	async createUser(data: any): Promise<User> {
		return this.userRepository.save(data);
	}

	async getAllPosts(): Promise<Post[]> {
		return this.postRepository.find({ where: [null] });
	}

	async getPostById(condition: any): Promise<Post> {
		return this.postRepository.findOne({ where: [condition] });
	}

	async createPost(data: any): Promise<Post> {
		return this.postRepository.save(data);
	}

	async updatePost(data: any) {
		this.postRepository.save(data);
	}

	async deletePost(data: any) {
		this.postRepository.delete(data);
	}

	async findOne(condition: any): Promise<User> {
		return this.userRepository.findOne({ where: [condition] });
	}
}
