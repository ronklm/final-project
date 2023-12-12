import { Component, OnInit } from '@angular/core';
import { BlogEntry } from './blog-entry/blog-entry.mode';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  entries: Array<BlogEntry> = [];
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit(): void {
      this.getEntries()
      setTimeout(()=>{this.isLoading=false;}, 3000);
  }

  getEntries(): void {
    this.entries = [
      {
        title: "Recently...",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet non curabitur gravida arcu ac.
          Pellentesque habitant morbi tristique senectus et netus. Convallis tellus id interdum velit
          laoreet id donec ultrices. At augue eget arcu dictum varius duis at consectetur.
          Libero volutpat sed cras ornare arcu dui vivamus arcu. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Eget nulla facilisi etiam dignissim diam quis enim lobortis
          scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. 
          Ipsum dolor sit amet consectetur adipiscing. Phasellus egestas tellus rutrum tellus pellentesque.
          Mauris augue neque gravida in fermentum et sollicitudin. Eleifend donec pretium vulputate sapien.
          Sed ullamcorper morbi tincidunt ornare massa.`,
        date: new Date('02/28/2022')
      },
      {
        title: "I Miss January",
        content: `Luctus accumsan tortor posuere ac ut consequat. Ac turpis egestas 
          sed tempus urna. A pellentesque sit amet porttitor eget dolor morbi. Amet risus nullam eget felis eget 
          nunc lobortis mattis. Justo nec ultrices dui sapien eget. Pulvinar pellentesque habitant morbi tristique 
          senectus et netus et. Ac felis donec et odio pellentesque diam volutpat. Feugiat scelerisque varius morbi 
          enim nunc faucibus a pellentesque sit. Quis varius quam quisque id diam vel quam elementum. Purus viverra 
          accumsan in nisl nisi scelerisque eu. Pharetra sit amet aliquam id diam.`,
          date: new Date('02/03/2023')
      },
      {
        title: "Did We Skip Winter?",
        content: `Magna fringilla urna porttitor rhoncus dolor purus. 
          Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Euismod elementum nisi 
          quis eleifend quam adipiscing vitae proin. Interdum consectetur libero id faucibus nisl. Eu 
          feugiat pretium nibh ipsum consequat. Est pellentesque elit ullamcorper dignissim cras tincidunt 
          lobortis. Nibh cras pulvinar mattis nunc sed blandit libero. Nec ullamcorper sit amet risus nullam 
          eget felis eget. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Vulputate 
          dignissim suspendisse in est ante in nibh. At urna condimentum mattis pellentesque id nibh tortor id 
          aliquet. Sed id semper risus in hendrerit. Arcu risus quis varius quam quisque. Elementum tempus 
          egestas sed sed. Varius duis at consectetur lorem donec massa sapien faucibus.`,
        date: new Date('01/30/2023')
      },
    ];
  }

}
