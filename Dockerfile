FROM node:18.17-alpine3.17 as builder
RUN apk add git
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci -ignore-scripts
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=3072
RUN npm run build


# Sử dụng một image web server nhẹ để chạy ứng dụng đã xây dựng
FROM nginx:alpine

# Sao chép các file cần thiết từ image node đã xây dựng
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Sao chép tệp cấu hình Nginx
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf


# Thiết lập cổng mặc định của Nginx
EXPOSE 80

# Khởi động Nginx khi container được chạy
CMD ["nginx", "-g", "daemon off;"]